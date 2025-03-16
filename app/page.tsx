import Image from "next/image";
import { Button } from "@/app/components/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="row-start-2 mx-auto flex flex-col items-center gap-8 p-8 sm:items-start">
        <section id="hero" className="grid gap-4 md:grid-cols-2 md:place-items-stretch lg:max-w-screen-2xl lg:gap-8">
          <div className="flex flex-col justify-center gap-8 text-balance">
            <h1 className="text-3xl leading-tight font-bold lg:text-[clamp(3rem,3.33vw,4.25rem)]">
              <span className="text-primary">Biztonságos</span> és <span className="text-primary">profi</span> villanyszerelés lakossági
              ügyfeleknek!
            </h1>
            <p className="text-tertiary font-semibold lg:text-xl">
              Regisztrált villanyszerelőként biztosítjuk, hogy otthonod elektromos rendszere biztonságos, szabványos és megbízható legyen.
            </p>
            <div className="mt-4 flex flex-wrap items-stretch justify-start gap-4 text-lg md:text-xl lg:text-2xl">
              <Button color="primary">Hívjon most</Button>
              <Button color="tertiary">Szolgáltatások</Button>
            </div>
          </div>
          <div className="relative aspect-square max-md:row-start-1">
            <Image
              fill
              src="/hero-image.png"
              alt="Portré kép Csépke Lászlóról és Ifj. Csépke Lászlóról"
              objectFit="contain"
              objectPosition="center"
              priority
            />
          </div>
        </section>
      </main>
      <footer className="mt-auto flex flex-wrap items-center justify-center gap-6">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
