"use client";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/images/logo.svg";
import icon from "@/public/images/icon.svg";
import ThemeToggler from "./theme-toggler";

const navigation = [
  {
    name: "Visit our location",
    href: "https://share.google/nWhUabHJhAbkHuRDA",
  },
  { name: "View our Instagram", href: "https://www.instagram.com/ichibanscv" },
  {
    name: "Yelp Photo Gallery",
    href: "https://www.yelp.com/biz_photos/ichiban-sushi-and-bar-santa-clarita",
  },
  {
    name: "Order on Grubhub",
    href: "https://www.grubhub.com/restaurant/ichiban-sushi--bar-27625-shangri-la-dr-canyon-country/1437256",
  },
  {
    name: "Order on Uber Eats",
    href: "https://www.ubereats.com/store/ichiban-sushi-%26-bar/SSFugl8EQyqLzEvZdvo-Sw",
  },
];

const categories = [
  { id: 1, page: "Inari Sushi", href: "/menu/inari-sushi" },
  { id: 2, page: "Pocha Menu", href: "/menu/pocha" },
  { id: 3, page: "Fresh Rolls", href: "/menu/fresh-rolls" },
  { id: 4, page: "Baked Rolls", href: "/menu/baked-rolls" },
  { id: 5, page: "Tempura Rolls", href: "/menu/tempura-rolls" },
  { id: 6, page: "Sushi Burritos", href: "/menu/sushi-burritos" },
  { id: 7, page: "Regular Rolls", href: "/menu/regular-rolls" },
  { id: 8, page: "Hand Rolls", href: "/menu/hand-rolls" },
  { id: 9, page: "Nigiri Sushi", href: "/menu/nigiri-sushi" },
  { id: 10, page: "Special Sushi", href: "/menu/special-sushi" },
  { id: 11, page: "Sashimi", href: "/menu/sashimi" },
  { id: 12, page: "Appetizers (cold)", href: "/menu/appetizers-cold" },
  { id: 13, page: "Appetizers (warm)", href: "/menu/appetizers-warm" },
  { id: 14, page: "Salad", href: "/menu/salad" },
  { id: 15, page: "Soup and Noodles", href: "/menu/soup-noodles" },
  { id: 16, page: "Entree", href: "/menu/entree" },
  { id: 17, page: "Side Orders", href: "/menu/side-orders" },
  { id: 18, page: "Bento Box", href: "/menu/bento-box" },
  { id: 19, page: "Kid's Menu", href: "/menu/kids-menu" },
  { id: 20, page: "Beverages", href: "/menu/beverages" },
  { id: 21, page: "Sake & Soju", href: "/menu/sake-soju" },
  { id: 22, page: "Beer & Wine", href: "/menu/beer-wine" },
  { id: 23, page: "Dessert", href: "/menu/dessert" },
];

export default function IchibanHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div>
      <header>
        <div>
          <nav
            aria-label="Global"
            className="flex items-center  justify-between p-6 lg:px-8 bg-white dark:bg-black"
          >
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Ichiban Sushi & Bar</span>
                <div className="flex">
                  <div>
                    <Image
                      alt="Ichiban Sushi & Bar logo"
                      src={logo}
                      className="h-10 w-auto dark:invert"
                    />
                  </div>
                  <div>
                    <Image
                      alt="Ichiban Sushi & Bar icon"
                      src={icon}
                      className="h-12 -mt-2 pl-1  w-auto"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black dark:text-white"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {/* <div><ThemeToggler /></div> */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  className="text-sm/6 font-semibold dark:text-white text-black hover:text-black hover:bg-red-200 block rounded-2xl p-2"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="/menu"
                className="text-sm/6 font-semibold dark:text-white text-black hover:bg-red-200 rounded-2xl p-2 hover:text-black"
              >
                View Menu<span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </div>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-black bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Ichiban Sushi & Bar</span>
                <div className="flex">
                  <div>
                    <Image
                      alt="Ichiban Sushi & Bar logo"
                      src={logo}
                      className="h-10 w-auto dark:invert"
                    />
                  </div>
                  <div>
                    <Image
                      alt="Ichiban Sushi & Bar icon"
                      src={icon}
                      className="h-12 -mt-2 pl-1  w-auto"
                    />
                  </div>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 dark:text-gray-200 text-black"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-2xl px-3 py-2 text-base/7 font-semibold dark:text-white text-black hover:bg-red-200 hover:text-black"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <div className="mb-20">
                    <nav className="p-2 m-2 sticky top-30">
                      <p className="pb-4 dark:text-white text-black font-black">
                        Categories
                      </p>
                      <ul className="text-black dark:text-white flex flex-col ">
                        {categories.map((category) => (
                          <Link
                            className="p-2 hover:bg-red-200 hover:text-black dark:text-white light:text-black block rounded-2xl"
                            key={category.id}
                            onClick={handleClose}
                            href={`${category.href}`}
                          >{`${category.page}`}</Link>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
