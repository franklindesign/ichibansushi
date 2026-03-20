"use client";
import type { FC, TouchEvent } from "react";
import { useRef, useState } from "react";
 

type ScrollCard = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
};

const cards: ScrollCard[] = [
  {
    id: 1,
    title: "Rainbow Roll",
    subtitle: "Fresh roll w/ four kinds of fish and avocado.",
    image: "../static/items/freshRolls/RainbowRoll.jpg",
  },
  {
    id: 2,
    title: "Albacore Delight Roll",
    subtitle: "Fresh roll w/ albacore, onions, masago...",
    image: "../static/items/freshRolls/AlbacoreDelightRoll.jpg",
  },
  {
    id: 3,
    title: "California Cut Roll",
    subtitle: "Classic California maki. ",
    image: "../static/items/mostLikedItems/californiaCutRoll.jpg",
  },
  {
    id: 4,
    title: "Sean's Roll",
    subtitle: "Tempura roll w/ salmon, shrimp, avocado...",
    image: "../static/items/tempurarolls/seanRoll.jpg",
  },
  {
    id: 5,
    title: "Spider Man Sushi Burrito",
    subtitle: "Soy paper w/ salmon, spicy tuna, avocado...",
    image: "../static/items/sushiBurritos/SpiderManBurrito.jpg",
  },
  {
    id: 6,
    title: "Spicy Shrimp & Crab Inari",
    subtitle: "Inarizushi w/ spicy shrimp & crab",
    image: "../static/items/inariSushi/spicyshrimp.jpg",
  },
  {
    id: 7,
    title: "Baked Green Mussel (5 Pieces)",
    subtitle: "Five pieces of baked green mussels",
    image: "../static/items/hotAppetizers/BakedGreenMussels.jpg"
  },
];

function shuffleCards(items: ScrollCard[]): ScrollCard[] {
  const shuffled = [...items];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
}

const HorizontalCardScroll: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartXRef = useRef<number>(0);
  const scrollStartLeftRef = useRef<number>(0);
  const [shuffledCards] = useState<ScrollCard[]>(() => shuffleCards(cards));

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    touchStartXRef.current = event.touches[0]?.clientX ?? 0;
    scrollStartLeftRef.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current) {
      return;
    }

    const currentX = event.touches[0]?.clientX ?? touchStartXRef.current;
    const deltaX = currentX - touchStartXRef.current;
    containerRef.current.scrollLeft = scrollStartLeftRef.current - deltaX;
  };

  return (
    <section className="w-full px-4 py-8">
      <h2 className="mb-4 md:text-2xl text-xl font-bold text-slate-900 dark:text-white">
        Popular Items
      </h2>

      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        className="flex gap-4 overflow-x-auto pb-2 [touch-action:pan-x]"
      >
        {shuffledCards.map((card) => (
          <article
            key={card.id}
            className="min-w-75 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <img
              loading="lazy"
              suppressHydrationWarning={true}
              src={card.image}
              alt={card.title}
              width={300}
              height={300}
              className="h-75 w-75 rounded-lg object-cover"
            />
            <h3 className="mt-3 text-lg font-semibold text-slate-900">
              {card.title}
            </h3>
            <p className="text-sm text-slate-600">{card.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default HorizontalCardScroll;
