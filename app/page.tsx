import Image from "next/image";
import { Button } from "@/app/components/button";
import { HomeWithManInsideIcon } from "./components/icons/home-with-man-inside";
import { DoubleCheckMarkIcon } from "./components/icons/double-check-mark";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="mx-auto flex flex-col items-center gap-8 p-8 sm:items-start">
        <section id="hero" className="grid gap-4 md:grid-cols-2 md:place-items-stretch lg:max-w-screen-2xl lg:gap-8">
          <div className="flex flex-col justify-center gap-8 text-balance">
            <h1 className="text-3xl leading-tight font-bold lg:text-[clamp(3rem,3.33vw,4rem)]">
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
          <div className="relative aspect-square max-md:row-start-1" aria-disabled>
            <Image
              fill
              src="/hero-image.png"
              alt="Csépke László és Ifj. Csépke László"
              objectFit="contain"
              objectPosition="center"
              priority
            />
          </div>
        </section>

        <section
          id="below the fold"
          className="grid w-full grid-cols-1 place-items-stretch gap-16 max-md:pt-8 md:w-full md:grid-cols-[1fr_2fr] md:flex-row md:items-center lg:max-w-screen-2xl"
        >
          <div
            className="after:bg-tertiary relative mr-8 aspect-square overflow-visible after:absolute after:inset-0 after:-z-10 after:translate-x-8 after:translate-y-8 after:content-['']"
            aria-disabled
          >
            <Image fill src="/below-the-fold.png" alt="Csépke Lászlóról munka közben" objectFit="contain" objectPosition="center" />
          </div>
          <ul className="flex items-center justify-center gap-8 text-xl max-md:flex-wrap md:w-fit md:flex-row md:justify-end md:justify-self-end lg:text-2xl">
            <li className="bg-primary flex items-center justify-center gap-4 rounded-[1em] p-4 text-white md:flex-col lg:p-8">
              <HomeWithManInsideIcon className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
              <p className="max-w-[20ch] text-center font-bold">Csak lakossági ügyfelek számára</p>
            </li>
            <li className="bg-primary flex items-center justify-center gap-4 rounded-[1em] p-4 text-white md:flex-col lg:p-8">
              <DoubleCheckMarkIcon className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
              <p className="max-w-[20ch] text-center font-bold">Több mint 20 féle szolgáltatás</p>
            </li>
          </ul>
        </section>
      </main>
      <footer className="mt-auto flex flex-wrap items-center justify-center gap-6 py-16">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
