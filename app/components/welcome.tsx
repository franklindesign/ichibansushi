"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const welcomeMessages = [
  "Welcome to your next favorite sushi spot.",
  "Fresh rolls, warm rice, and a table waiting for you.",
  "Settle in for sushi made to share and savor.",
  "From nigiri to signature rolls, dinner starts here.",
  "Welcome in for fresh sushi and an easy night out.",
];

const backgroundPhotos = [
    "../images/bg/2212395823.webp",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1563612116625-3012372fccce?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=1600&q=80",
];

const getRandomIndex = (length: number, currentIndex?: number) => {
  if (length <= 1) {
    return 0;
  }

  let nextIndex = Math.floor(Math.random() * length);

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * length);
  }

  return nextIndex;
};

export default function Welcome() {
  const [backgroundIndex, setBackgroundIndex] = useState(() =>
    getRandomIndex(backgroundPhotos.length),
  );
  const [messageIndex, setMessageIndex] = useState(() =>
    getRandomIndex(welcomeMessages.length),
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setBackgroundIndex((currentIndex) =>
        getRandomIndex(backgroundPhotos.length, currentIndex),
      );
      setMessageIndex((currentIndex) =>
        getRandomIndex(welcomeMessages.length, currentIndex),
      );
    }, 6000);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="z-0">
      <div
        className="relative overflow-hidden bg-black transition-[background-image] duration-1000 ease-out"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(${backgroundPhotos[backgroundIndex]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div />
          </div>

          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center ">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                {welcomeMessages[messageIndex]}
              </h1>

              <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"></p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/menu"
                  className=" bg-black px-3.5 py-2.5 text-xl font-semibold text-white hover:text-black shadow-xs hover:bg-red-200 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  View Menu<span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div />
          </div>
        </div>
      </div>
    </div>
  );
}
