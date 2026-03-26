"use client";
import FAQAccordion from "./components/faq";
import dynamic from "next/dynamic";
import AmenitiesList from "./components/amenities";
import PochaBanner from "./components/pochaBanner";

const Hero = dynamic(() => import("./components/hero"), { ssr: false });
 
const Welcome = dynamic(() => import("./components/welcome"), { ssr: false });
const DynamicHorizontalCards = dynamic(
  () => import("./components/horizonalcards"),
  { ssr: false },
);


export default function Home() {
  return (
    <div>
      <div>
        <Welcome></Welcome>
      </div>
      <div>
        <DynamicHorizontalCards />
      </div>
      <PochaBanner></PochaBanner>
 
      <div>
        <AmenitiesList></AmenitiesList>
      </div>
      <Hero />
      <div>
        <FAQAccordion />
      </div>
    </div>
  );
}
