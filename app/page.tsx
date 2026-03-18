'use client';
import Hero from "./components/hero";
import Welcome from "./components/welcome";
import FAQAccordion from "./components/faq";
 
import dynamic from 'next/dynamic'
import AmenitiesList from "./components/amenities";
 

const DynamicHorizontalCards = dynamic(() => import("./components/horizonalcards"), { ssr: false })

export default function Home() {
  return (
    <div>
       
      <div>
        <Welcome></Welcome>
      </div>
      <div>
        <DynamicHorizontalCards />
      </div>
      <div>
        <Hero />
      </div>
      <div><AmenitiesList></AmenitiesList></div>
      <div>
        <FAQAccordion />
      </div>
    </div>
  );
}
