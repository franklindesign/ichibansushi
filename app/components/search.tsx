"use client";

import Link from "next/link";
import { SyntheticEvent, useDeferredValue, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import defaultItems from "./search-items.json";
import HorizonalScrollNav from "./horizonalScrollNav";

type SearchItem = {
  id: number | string;
  title: string;
  href: string;
  section: string;
};

type NavLink = {
  label: string;
  href: string;
};

type SearchComponentProps = {
  brand?: string;
  links?: NavLink[];
  items?: SearchItem[];
  placeholder?: string;
};

export default function SearchComponent({
  items = defaultItems as SearchItem[],
  placeholder = "Search menu",
}: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [previewItems, setPreviewItems] = useState<SearchItem[]>([]);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();
  const hasMinQueryLength = normalizedQuery.length > 1;
  const hasQuery = normalizedQuery.length > 0;

  const filteredItems = hasMinQueryLength
    ? items.filter((item) =>
        [item.title, item.section].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
    : [];

  const visibleItems = hasMinQueryLength ? filteredItems : previewItems;
  const showResults = isFocused && (hasMinQueryLength || !hasQuery);

  const randomizePreviewItems = () => {
    const shuffledItems = [...items].sort(() => Math.random() - 0.5);
    setPreviewItems(shuffledItems.slice(0, Math.min(6, shuffledItems.length)));
  };

  const clearResults = () => {
    setQuery("");
    setIsFocused(false);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearResults();
  };

  return (
    <div className="bg-white dark:bg-black" role="searchBar">
      <header className=" bg-white/80 dark:bg-black backdrop-blur-xl">
        <nav className="mx-auto flex xs:w-2xl  max-w-2xl flex-col gap-4 px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="relative w-full max-w-xl">
            <label className="flex h-12 items-center rounded-2xl  bg-slate-50/80 pl-4 pr-3 shadow-sm transition focus-within:border-red-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-red-200">
              <div className="px-2">
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </div>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => {
                  randomizePreviewItems();
                  setIsFocused(true);
                }}
                onBlur={() => {
                  window.setTimeout(() => {
                    setIsFocused(false);
                  }, 120);
                }}
                placeholder={placeholder}
                className="h-full w-full bg-white rounded-2xl  p-2 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                aria-label="Search navigation"
              />
              {query ? (
                <button
                  type="button"
                  onClick={clearResults}
                  className="rounded-full px-3 py-1 text-xs font-semibold text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                >
                  <XMarkIcon aria-hidden="false" className="size-6" />
                </button>
              ) : (
                <div></div>
              )}
            </label>

            {showResults ? (
              <div className="absolute top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-2xl bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)]">
                {visibleItems.length > 0 ? (
                  <div className="p-2">
                    {visibleItems.map((item) => (
                      <Link
                        onClick={clearResults}
                        key={item.id}
                        href={`${item.href + `#` + item.id}`}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-slate-50"
                      >
                        <div className="p-2">
                          <div className="flex">
                            <MagnifyingGlassIcon
                              aria-hidden="true"
                              className="size-6 text-black"
                            />
                            <p className="text-sm font-semibold  text-black">
                              {item.title}
                            </p>
                          </div>
                          <div>
                            <p className="text-xs font-light text-black">
                              {item.section}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <p className="text-sm font-semibold text-black">
                      No results
                    </p>
                    <p className="mt-1 text-sm text-black ">
                      Try another keyword.
                    </p>
                  </div>
                )}
              </div>
            ) : null}
          </div>
          <HorizonalScrollNav></HorizonalScrollNav>
        </nav>
      </header>
    </div>
  );
}
