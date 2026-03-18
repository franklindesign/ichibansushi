"use client";

import Link from "next/link";
import { SyntheticEvent, useDeferredValue, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

type SearchItem = {
  id: number | string;
  page: string;
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

const defaultItems: SearchItem[] = [
  { id: 0, page: "Popular Items", href: "/menu/", section: "Popular Items" },
  { id: 1, page: "Pocha Menu", href: "/menu/pocha", section: "Pocha Menu" },
  {
    id: 12,
    page: "Appetizers (cold)",
    href: "/menu/appetizers-cold",
    section: "Appetizers (cold) items",
  },
  {
    id: 13,
    page: "Appetizers (warm)",
    href: "/menu/appetizers-warm",
    section: "Appetizers (warm) items",
  },
  { id: 14, page: "Salad", href: "/menu/salad", section: "Salad items" },
  {
    id: 7,
    page: "Regular Rolls",
    href: "/menu/regular-rolls",
    section: "Regular Roll items",
  },
  {
    id: 8,
    page: "Hand Rolls",
    href: "/menu/hand-rolls",
    section: "Hand Roll items",
  },
  {
    id: 3,
    page: "Fresh Rolls",
    href: "/menu/fresh-rolls",
    section: "Fresh Roll items",
  },
  {
    id: 4,
    page: "Baked Rolls",
    href: "/menu/baked-rolls",
    section: "Baked Roll items",
  },
  {
    id: 5,
    page: "Tempura Rolls",
    href: "/menu/tempura-rolls",
    section: "Tempura Roll items",
  },
  {
    id: 6,
    page: "Sushi Burritos",
    href: "/menu/sushi-burritos",
    section: "Sushi Burrito items",
  },
  {
    id: 2,
    page: "Inarizushi",
    href: "/menu/inarizushi",
    section: "Inari sushi items",
  },
  {
    id: 9,
    page: "Nigiri",
    href: "/menu/nigiri-sushi",
    section: "Nigiri items",
  },
  { id: 10, page: "Sashimi", href: "/menu/sashimi", section: "Sashimi items" },
  {
    id: 11,
    page: "Sushi Combo",
    href: "/menu/sushi-combo",
    section: "sushi combo items",
  },
  {
    id: 15,
    page: "Soup and Noodles",
    href: "/menu/soup-noodles",
    section: "soup and noodle items",
  },
  { id: 16, page: "Entree", href: "/menu/entree", section: "entree items" },
  {
    id: 17,
    page: "Side Orders",
    href: "/menu/side-orders",
    section: "side order items",
  },
  {
    id: 18,
    page: "Bento Box",
    href: "/menu/bento-box",
    section: "bento boxes",
  },
  {
    id: 19,
    page: "Kid's Menu",
    href: "/menu/kids-menu",
    section: "kid's menu items",
  },
  {
    id: 20,
    page: "Beverages",
    href: "/menu/beverages",
    section: "beverages (non-alcoholic)",
  },
  {
    id: 22,
    page: "Beer & Wine",
    href: "/menu/beer-wine",
    section: "Beer and wine items",
  },
  {
    id: 21,
    page: "Sake & Soju",
    href: "/menu/sake-soju",
    section: "Sake and soju items",
  },
  { id: 23, page: "Dessert", href: "/menu/dessert", section: "Dessert items" },
];

export default function SearchComponent({
  items = defaultItems,
  placeholder = "Search menu",
}: SearchComponentProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const deferredQuery = useDeferredValue(query);
  const normalizedQuery = deferredQuery.trim().toLowerCase();

  const filteredItems = normalizedQuery
    ? items.filter((item) =>
        [item.page, item.section].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
    : [];

  const showResults = isFocused && normalizedQuery.length > 0;

  const clearResults = () => {
    setQuery("");
    setIsFocused(false);
  };

  const handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearResults();
  };

  return (
    <div className="bg-white dark:bg-black">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
        <nav className="mx-auto flex xs:w-2xl  max-w-2xl flex-col gap-4 px-4 py-2 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="relative w-full max-w-xl">
            <label className="flex h-12 items-center rounded-2xl  bg-slate-50/80 pl-4 pr-3 shadow-sm transition focus-within:border-cyan-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-cyan-100">
              <div className="px-2">
                <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              </div>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setIsFocused(true)}
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
              <div className="absolute   top-[calc(100%+0.75rem)] z-50 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_-48px_rgba(15,23,42,0.5)]">
                {filteredItems.length > 0 ? (
                  <div className="p-2">
                    {filteredItems.map((item) => (
                      <Link
                        onClick={clearResults}
                        key={item.id}
                        href={item.href}
                        className="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-slate-50"
                      >
                        <div className="p-2">
                          <p className="text-sm font-semibold text-slate-900">
                            {item.page}
                          </p>
                          <p className="text-xs uppercase tracking-[0.18em] text-black">
                            {item.section}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="px-4 py-6 text-center">
                    <p className="text-sm font-semibold text-slate-900">
                      No results
                    </p>
                    <p className="mt-1 text-sm text-black">
                      Try another keyword.
                    </p>
                  </div>
                )}
              </div>
            ) : null}
          </div>
        </nav>
      </header>
    </div>
  );
}
