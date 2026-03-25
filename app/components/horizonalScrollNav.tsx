"use client";

import Link from "next/link";

const categories = [
  { id: 24, category: "All Items", href: "/menu" },
  { id: 1, category: "Appetizers (Cold)", href: "/menu/appetizers-cold" },
  { id: 2, category: "Appetizers (Warm)", href: "/menu/appetizers-warm" },
  { id: 3, category: "Baked Rolls", href: "/menu/baked-rolls" },
  { id: 4, category: "Fresh Rolls", href: "/menu/fresh-rolls" },
  { id: 5, category: "Tempura Rolls", href: "/menu/tempura-rolls" },
  { id: 6, category: "Hand Rolls", href: "/menu/hand-rolls" },
  { id: 7, category: "Regular Rolls", href: "/menu/regular-rolls" },
  { id: 8, category: "Sushi Burritos", href: "/menu/sushi-burritos" },
  { id: 9, category: "Nigiri", href: "/menu/nigiri-sushi" },
  { id: 10, category: "Sashimi", href: "/menu/sashimi" },
  { id: 11, category: "Sushi Combo", href: "/menu/sushi-combo" },
  { id: 12, category: "Inarizushi", href: "/menu/inarizushi" },
  { id: 13, category: "Bento Box", href: "/menu/bento-box" },
  { id: 14, category: "Salad", href: "/menu/salad" },
  { id: 15, category: "Entree", href: "/menu/entree" },
  { id: 16, category: "Side Orders", href: "/menu/side-orders" },
  { id: 17, category: "Kids Menu", href: "/menu/kids-menu" },
  { id: 18, category: "Soup & Noodles", href: "/menu/soup-noodles" },
  { id: 19, category: "Beverages", href: "/menu/beverages" },
  { id: 20, category: "Beer & Wine", href: "/menu/beer-wine" },
  { id: 21, category: "Sake & Soju", href: "/menu/sake-soju" },
  { id: 22, category: "Dessert", href: "/menu/dessert" },
  { id: 23, category: "Pocha Menu", href: "/menu/pocha" },
];

export default function HorizonalScrollNav() {
  return (
    <div className="sm:hidden lg:hidden max-w-dvw">
      <nav className="flex overflow-x-scroll space-x-2 p-2  touch-pan-x bg-white dark:bg-black text-black dark:text-white rounded-xl">
        {categories.map((category) => (
          <Link
            className="shrink-0 px-2 hover:bg-red-200 hover:text-black rounded-2xl"
            key={category.id}
            href={`${category.href}`}
          >{`${category.category}`}</Link>
        ))}
      </nav>
    </div>
  );
}
