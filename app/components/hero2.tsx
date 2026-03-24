"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "/static/heroes/hero.jpg",
  "/static/heroes/outdoor-seating.jpg",
  "/static/heroes/ichiban-hero-new-patio.jpg",
];

const ROTATION_INTERVAL_SECONDS = 6;

const shuffleImages = (imageList: string[]) => {
  const order = [...imageList];

  for (let index = order.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [order[index], order[swapIndex]] = [order[swapIndex], order[index]];
  }

  return order;
};

const getAnimationPercentages = (imageCount: number) => {
  if (imageCount <= 1) {
    return {
      fadeInEnd: 100,
      visibleEnd: 100,
      fadeOutEnd: 100,
    };
  }

  const framePercent = 100 / imageCount;

  return {
    fadeInEnd: framePercent * 0.18,
    visibleEnd: framePercent * 0.82,
    fadeOutEnd: framePercent,
  };
};

export default function Hero() {
  const [shuffledImages] = useState(() => shuffleImages(images));
  const totalAnimationSeconds =
    shuffledImages.length * ROTATION_INTERVAL_SECONDS;
  const { fadeInEnd, visibleEnd, fadeOutEnd } =
    getAnimationPercentages(shuffledImages.length);

  return (
    <div className="relative h-[320px] max-h-[600px] w-full overflow-hidden sm:h-[420px] md:h-[520px] lg:h-[600px]">
      {shuffledImages.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 hero-slide"
          style={{
            animationDuration: `${totalAnimationSeconds}s`,
            animationDelay: `${index * ROTATION_INTERVAL_SECONDS}s`,
          }}
        >
          <Image
            alt="yelp banner"
            priority={index === 0}
            src={image}
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 flex items-center justify-center px-6 text-center lg:px-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Header Text On Top
          </h1>
        </div>
      </div>

      <style jsx>{`
        .hero-slide {
          opacity: 0;
          animation-name: hero-rotation;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes hero-rotation {
          0% {
            opacity: 0;
          }
          ${fadeInEnd}% {
            opacity: 1;
          }
          ${visibleEnd}% {
            opacity: 1;
          }
          ${fadeOutEnd}% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
