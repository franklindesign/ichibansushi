import Image from "next/image";
import Link from "next/link";

const image = "/static/heroes/pochaBanner.webp";

export default function PochaBanner() {
  return (
    <div className="relative max-w-dvw">
      <Link href="/menu/pocha">
        <Image
          alt="pocha banner"
          loading="lazy"
          src={image}
          quality={80}
          fill
          className="object-cover"
        />
      </Link>
      <div className="px-6 pt-14 lg:px-8">
        <div className="py-16 sm:py-32 lg:py-80  "></div>
      </div>
    </div>
  );
}
