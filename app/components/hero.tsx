import Image from "next/image";

const image = "/static/heroes/hero.jpg";

export default function Hero() {
  return (
    <div className="relative max-w-dvw">
      <Image
        alt="yelp banner"
        loading="lazy"
        src={image}
        quality={75}
        fill
        className="object-cover"
      />

      <div className="px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-32 lg:py-80  ">
          
        </div>
      </div>
    </div>
  );
}
