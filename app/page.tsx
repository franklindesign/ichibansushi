"use client";
import FAQAccordion from "./components/faq";
import dynamic from "next/dynamic";
import AmenitiesList from "./components/amenities";

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
      <Hero />
      <div>
      </div>
      <div>
        <AmenitiesList></AmenitiesList>
      </div>
      <div>
        <FAQAccordion />
      </div>
      
    </div>
  );
}
