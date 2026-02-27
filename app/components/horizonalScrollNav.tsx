"use client";

const categories = [
  { id: 1, category: "Appetizers (Cold)", href: "#AppetizersCold" },
  { id: 2, category: "Appetizers (Warm)", href: "#AppetizersWarm" },
  { id: 3, category: "Baked Rolls", href: "#BakedRolls" },
  { id: 4, category: "Fresh Rolls", href: "#FreshRolls" },
  { id: 5, category: "Tempura Rolls", href: "#TempuraRolls" },
  { id: 6, category: "Hand Rolls", href: "#HandRolls" },
  { id: 7, category: "Regular Rolls", href: "#RegularRolls" },
  { id: 8, category: "Sushi Burritos", href: "#SushiBurritos" },
  { id: 9, category: "Special Sushi", href: "#SpecialSushi" },
  { id: 10, category: "Nigiri Sushi", href: "#Nigiri" },
  { id: 11, category: "Sashimi", href: "#Sashimi" },
  { id: 12, category: "Inarizushi", href: "#Inarizushi" },
  { id: 13, category: "Bento Box", href: "#Bento" },
  { id: 14, category: "Salad", href: "#Salad" },
  { id: 15, category: "Entree", href: "#Entree" },
  { id: 16, category: "Side Orders", href: "#SideOrders" },
  { id: 17, category: "Kids Menu", href: "#KidsMenu" },
  { id: 18, category: "Soup & Noodles", href: "#SoupNoodles" },
  { id: 19, category: "Beverages", href: "#Beverages" },
  { id: 20, category: "Beer & Wine", href: "#BeerWine" },
  { id: 21, category: "Sake & Soju", href: "#SakeSoju" },
  { id: 22, category: "Dessert", href: "#Dessert" },
];

export default function HorizonalScrollNav() {
  return (
    <div className="md:hidden pb-4 w-[375]">
      <nav className="flex overflow-x-scroll space-x-4 p-4 touch-pan-x bg-white dark:bg-black text-black dark:text-white">
        {categories.map((category) => (
          <a
            className="shrink-0 px-4 py-2 hover:bg-red-200 hover:text-black rounded-md"
            key={category.id}
            href={`${category.href}`}
          >{`${category.category}`}</a>
        ))}
      </nav>
    </div>
  );
}
