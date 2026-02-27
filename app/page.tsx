import Hero from "./components/hero";
import Welcome from "./components/welcome";

export default function Home() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-2">
      <div>
        <Welcome></Welcome>
      </div>
      <div>
        <Hero></Hero>
      </div>
    </div>
  );
}
