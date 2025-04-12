import ContactImage from "@/public/contact.png";
import Image from "next/image";
import { VibrationMobileIcon } from "./components/icons/vibrating-mobile";
import { AboutUsSection } from "./components/sections/about-us";
import { BelowTheFoldSection } from "./components/sections/below-the-fold";
import { ContactSection } from "./components/sections/contact";
import { FaqSection } from "./components/sections/faq";
import { HeroSection } from "./components/sections/hero";
import { ReferencesSection } from "./components/sections/references";
import { ReviewsSection } from "./components/sections/reviews";
import { ServicesSection } from "./components/sections/services";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-col items-center gap-8 sm:items-start">
        <HeroSection />

        <BelowTheFoldSection />

        <ContactSection
          id="contact"
          title="Megbízható villanyszerelőt keresel?"
          description="Írj nekünk vagy hívj minket, és szakértő csapatunk készséggel áll rendelkezésedre!"
          image={
            <Image
              fill
              src={ContactImage}
              alt="Csépke László"
              sizes="(max-width: 48rem) 90vw, 33vw"
              className="object-contain object-[center_bottom]"
              placeholder="blur"
            />
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
            <Image
              fill
              src={ContactImage}
              sizes="(max-width: 48rem) 90vw, 33vw"
              alt="Csépke László"
              className="object-contain object-[center_bottom]"
              placeholder="blur"
            />
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
