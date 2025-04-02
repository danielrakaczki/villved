"use client";

import { Button } from "@/app/components/button";
import ContactImage from "@/public/contact.png";
import HeroImage from "@/public/hero-image.png";
import Image from "next/image";
import { VibrationMobileIcon } from "./components/icons/vibrating-mobile";
import { ContactSection } from "./components/sections/contact";
import { ReferencesSection } from "./components/sections/references";
import { ServicesSection } from "./components/sections/services";
import { AboutUsSection } from "./components/sections/about-us";
import { ReviewsSection } from "./components/sections/reviews";
import { FaqSection } from "./components/sections/faq";
import { BelowTheFoldSection } from "./components/sections/below-the-fold";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-col items-center gap-8 sm:items-start">
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
                <Button color="primary">Hívjon most</Button>
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

        <BelowTheFoldSection />

        <ContactSection
          id="contact"
          title="Megbízható villanyszerelőt keresel?"
          description="Írj nekünk vagy hívj minket, és szakértő csapatunk készséggel áll rendelkezésedre!"
          image={
            <Image fill src={ContactImage} alt="Csépke László" objectFit="contain" objectPosition="center bottom" placeholder="blur" />
          }
        />

        <ServicesSection />

        <ContactSection
          id="contact-2"
          title="Kérdésed van? Segítünk!"
          description="Vedd fel velünk a kapcsolatot telefonon vagy emailben, és rövid időn belül válaszolunk!"
          image={<VibrationMobileIcon className="h-full w-full text-white" />}
          align="right"
          className="mt-32!"
        />

        <ReferencesSection />

        <AboutUsSection />

        <ReviewsSection />

        <ContactSection
          id="contact-3"
          className="mt-20!"
          title="Szakértői segítség egy hívásnyira!"
          description="Kérdésed van a szolgáltatásainkkal kapcsolatban? Vedd fel velünk a kapcsolatot, és villámgyorsan válaszolunk!"
          image={
            <Image fill src={ContactImage} alt="Csépke László" objectFit="contain" objectPosition="center bottom" placeholder="blur" />
          }
        />

        <FaqSection />
      </main>
      <footer className="mt-auto flex flex-wrap items-center justify-center gap-6 py-16">
        &copy; {new Date().getFullYear()} Minden jog fenntartva.
      </footer>
    </div>
  );
}
