"use client";
import FAQAccordion from "./components/faq";
import dynamic from "next/dynamic";
import AmenitiesList from "./components/amenities";
import Hero from "./components/hero";


const ImageSlider = dynamic(() => import("./components/imageSlider"), { ssr: false });
const Welcome = dynamic(() => import("./components/welcome"), { ssr: false });
const DynamicHorizontalCards = dynamic(
  () => import("./components/horizonalcards"),
  { ssr: false },
);

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>
        <Welcome></Welcome>
      </div>
      <div>
        <DynamicHorizontalCards />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <AmenitiesList></AmenitiesList>
      </div>
      {/* <main className="min-h-screen flex-col items-center justify-center py-2">
        <ImageSlider />
      </main> */}
      <div>
        <FAQAccordion />
      </div>
    </div>
  );
}
