import HeroImage from "@/public/hero-image.png";
import Image from "next/image";
import Link from "next/link";
import { Motion } from "../motion/motion";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";

export const HeroSection = () => {
  return (
    <Motion.section variants={WHILE_IN_VIEW_VARIANTS} whileInView="shown" initial="hidden" id="hero" className="w-full">
      <Motion.div
        variants={WHILE_IN_VIEW_VARIANTS}
        className="mx-auto grid w-full gap-4 p-8 md:grid-cols-2 md:place-items-stretch lg:max-w-screen-2xl"
      >
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="flex flex-col justify-center gap-8 text-balance">
          <Motion.h1 variants={WHILE_IN_VIEW_VARIANTS} className="text-3xl leading-tight font-bold lg:text-[clamp(3rem,3.33vw,4rem)]">
            <Motion.span className="text-primary">Biztonságos</Motion.span> és <Motion.span className="text-primary">profi</Motion.span>{" "}
            villanyszerelés lakossági ügyfeleknek!
          </Motion.h1>
          <Motion.p variants={WHILE_IN_VIEW_VARIANTS} className="text-tertiary font-semibold lg:text-xl">
            Regisztrált villanyszerelőként biztosítjuk, hogy otthonod elektromos rendszere biztonságos, szabványos és megbízható legyen.
          </Motion.p>
          <Motion.div
            key="buttons"
            variants={WHILE_IN_VIEW_VARIANTS}
            className="mt-4 flex flex-wrap items-stretch justify-start gap-4 text-lg md:text-xl lg:text-2xl"
          >
            <Motion.div key="primary" variants={WHILE_IN_VIEW_VARIANTS}>
              <Link className="btn primary" href="tel:+36121231234">
                Hívjon most
              </Link>
            </Motion.div>
            <Motion.div key="tertiary" variants={WHILE_IN_VIEW_VARIANTS}>
              <Link href="/#services" className="btn tertiary">
                Szolgáltatások
              </Link>
            </Motion.div>
          </Motion.div>
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative aspect-square max-md:row-start-1" aria-disabled>
          <Image
            fill
            src={HeroImage}
            alt="Csépke László és Ifj. Csépke László"
            objectFit="contain"
            objectPosition="center"
            placeholder="empty"
          />
        </Motion.div>
      </Motion.div>
    </Motion.section>
  );
};
