import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-8 mx-auto">
        <section
          id="hero"
          className="grid gap-4 md:grid-cols-2 lg:gap-8 md:place-items-stretch lg:max-w-screen-2xl"
        >
          <div className="flex flex-col justify-center gap-8 text-balance">
            <h1 className="font-bold leading-tight text-3xl lg:text-[clamp(3rem,3.33vw,4.25rem)]">
              <span className="text-primary">Biztonságos</span> és{" "}
              <span className="text-primary">profi</span> villanyszerelés
              lakossági ügyfeleknek!
            </h1>
            <p className="lg:text-xl font-semibold text-tertiary">
              Regisztrált villanyszerelőként biztosítjuk, hogy otthonod
              elektromos rendszere biztonságos, szabványos és megbízható legyen.
            </p>
          </div>
          <div className="relative max-md:row-start-1 aspect-square">
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
      <footer className="mt-auto flex gap-6 flex-wrap items-center justify-center">
        &copy; {new Date().getFullYear()} All rights reserved.
      </footer>
    </div>
  );
}
