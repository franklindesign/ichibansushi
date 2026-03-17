"use client";

import Link from "next/link";

const categories = [
  { id: 0, page: "Popular Items", href: "/menu/" },
  { id: 1, page: "Pocha Menu", href: "/menu/pocha" },
  { id: 12, page: "Appetizers (cold)", href: "/menu/appetizers-cold" },
  { id: 13, page: "Appetizers (warm)", href: "/menu/appetizers-warm" },
  { id: 14, page: "Salad", href: "/menu/salad" },
  { id: 7, page: "Regular Rolls", href: "/menu/regular-rolls" },
  { id: 8, page: "Hand Rolls", href: "/menu/hand-rolls" },
  { id: 3, page: "Fresh Rolls", href: "/menu/fresh-rolls" },
  { id: 4, page: "Baked Rolls", href: "/menu/baked-rolls" },
  { id: 5, page: "Tempura Rolls", href: "/menu/tempura-rolls" },
  { id: 6, page: "Sushi Burritos", href: "/menu/sushi-burritos" },
  { id: 2, page: "Inarizushi", href: "/menu/inarizushi" },
  { id: 9, page: "Nigiri", href: "/menu/nigiri-sushi" },
  { id: 10, page: "Sashimi", href: "/menu/sashimi" },
  { id: 11, page: "Sushi Combo", href: "/menu/sushi-combo" },
  { id: 15, page: "Soup and Noodles", href: "/menu/soup-noodles" },
  { id: 16, page: "Entree", href: "/menu/entree" },
  { id: 17, page: "Side Orders", href: "/menu/side-orders" },
  { id: 18, page: "Bento Box", href: "/menu/bento-box" },
  { id: 19, page: "Kid's Menu", href: "/menu/kids-menu" },
  { id: 20, page: "Beverages", href: "/menu/beverages" },
  { id: 22, page: "Beer & Wine", href: "/menu/beer-wine" },
  { id: 21, page: "Sake & Soju", href: "/menu/sake-soju" },
  { id: 23, page: "Dessert", href: "/menu/dessert" },
];

export default function Categories() {
  return (
    <div>
      <nav className="p-3 m-4 sticky top-30">
        <p className="pb-4 dark:text-white text-black font-black text-xl">Categories</p>
        <ul className="text-black dark:text-white flex flex-col">
          {categories.map((category) => (
            <Link
              className="p-2 hover:bg-red-200 hover:text-black rounded-2xl"
              key={category.id}
              href={`${category.href}`}
            >{`${category.page}`}</Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
