import Image from "next/image";

const image = "/static/heroes/hero.jpg";

export default function Hero() {
  return (
    <div className="relative h-[320px] max-h-[600px] w-full sm:h-[420px] md:h-[520px] lg:h-[600px]">
      <Image
        alt="yelp banner"
        loading="lazy"
        src={image}
        fill
        sizes="100vw"
        className="object-cover"
      />

      <div className="px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-32 lg:py-80  ">
          
        </div>
      </div>
    </div>
  );
}
