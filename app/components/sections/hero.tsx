import HeroImage from "@/public/hero-image.png";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section id="hero" className="w-full">
      <div className="mx-auto grid w-full gap-4 p-8 md:grid-cols-2 md:place-items-stretch lg:max-w-screen-2xl">
        <div className="flex flex-col justify-center gap-8 text-balance">
          <h1 className="text-3xl leading-tight font-bold lg:text-[clamp(3rem,3.33vw,4rem)]">
            <span className="text-primary">Biztonságos</span> és <span className="text-primary">profi</span> villanyszerelés lakossági
            ügyfeleknek!
          </h1>
          <p className="text-tertiary font-semibold lg:text-xl">
            Regisztrált villanyszerelőként biztosítjuk, hogy otthonod elektromos rendszere biztonságos, szabványos és megbízható legyen.
          </p>
          <div className="mt-4 flex flex-wrap items-stretch justify-start gap-4 text-lg md:text-xl lg:text-2xl">
            <Link className="btn primary" href="tel:+36121231234">
              Hívjon most
            </Link>
            <Link href="/#services" className="btn tertiary">
              Szolgáltatások
            </Link>
          </div>
        </div>
        <div className="relative aspect-square max-md:row-start-1" aria-disabled>
          <Image
            fill
            src={HeroImage}
            alt="Csépke László és Ifj. Csépke László"
            objectFit="contain"
            objectPosition="center"
            placeholder="empty"
          />
        </div>
      </div>
    </section>
  );
};
