"use client";
import Image from "next/image";
import bgimage from "../public/images/bg/2212395823.webp";
import Hero from "./components/hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black relative">
      <Image
        alt="bg"
        src={bgimage}
        fill
        sizes="100vw"
        quality={80}
        style={{ objectFit: "cover", opacity: 0.2 }}
      ></Image>

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
              Come in for a roll, stay awhile.
            </h1>

            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8"></p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/menu"
                className=" bg-black px-3.5 py-2.5 text-xl font-semibold text-white hover:text-black shadow-xs hover:bg-red-200 rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                View Our Menu<span aria-hidden="true">&rarr;</span>
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
  );
}
