import Image from "next/image";
import Link from "next/link";

const image = "/static/heroes/hero.jpg";

export default function Hero() {
  return (
    <div className="bg-white relative" >
      <Image
        alt="yelp banner"
        src={image}
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
      />

      <div className="px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-32 lg:py-80  "></div>
</div>
    </div>
  );
}
