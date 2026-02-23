"use client";

import Link from "next/link";

const categories = [
  { id: 0, page: "Popular Items", href: "/menu/" },
  { id: 1, page: "Inari Sushi", href: "/menu/inari-sushi" },
  { id: 2, page: "Fresh Rolls", href: "/menu/fresh-rolls" },
  { id: 3, page: "Baked Rolls", href: "/menu/baked-rolls" },
  { id: 4, page: "Tempura Rolls", href: "/menu/tempura-rolls" },
  { id: 5, page: "Sushi Burritos", href: "/menu/sushi-burritos" },
  { id: 6, page: "Regular Rolls", href: "/menu/regular-rolls" },
  { id: 7, page: "Hand Rolls", href: "/menu/hand-rolls" },
  { id: 8, page: "Nigiri Sushi", href: "/menu/nigiri-sushi" },
  { id: 9, page: "Special Sushi", href: "/menu/special-sushi" },
  { id: 10, page: "Sashimi", href: "/menu/sashimi" },
  { id: 11, page: "Appetizers (cold)", href: "/menu/appetizers-cold" },
  { id: 12, page: "Appetizers (warm)", href: "/menu/appetizers-warm" },
  { id: 13, page: "Salad", href: "/menu/salad" },
  { id: 14, page: "Soup and Noodles", href: "/menu/soup-noodles" },
  { id: 15, page: "Entree", href: "/menu/entree" },
  { id: 16, page: "Side Orders", href: "/menu/side-orders" },
  { id: 17, page: "Bento Box", href: "/menu/bento-box" },
  { id: 18, page: "Kid's Menu", href: "/menu/kids-menu" },
  { id: 19, page: "Beverages", href: "/menu/beverages" },
  { id: 20, page: "Sake & Soju", href: "/menu/sake-soju" },
  { id: 21, page: "Beer & Wine", href: "/menu/beer-wine" },
  { id: 22, page: "Dessert", href: "/menu/dessert" },
];

export default function Categories() {
  return (
    <div>
      <nav className="p-5 m-5 sticky top-30">
        <p className="pb-4 dark:text-white text-black ">Categories</p>
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
