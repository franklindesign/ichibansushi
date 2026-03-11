
import Hero from "./components/hero";
import Welcome from "./components/welcome";
import FAQAccordion from "./components/faq";
import HorizontalCardScroll from "./components/horizonalcards";


export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-rows-2">
      <div>
        <Welcome></Welcome>
      </div>
      <div><HorizontalCardScroll></HorizontalCardScroll></div>
      <div>
        <Hero></Hero>
         
      </div>
      <div><FAQAccordion></FAQAccordion></div>
    </div>
  );
}
