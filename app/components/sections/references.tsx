import HazOldaliMeroora2 from "@/public/haz-odali-meroora-2.jpeg";
import HazOldaliMeroora1 from "@/public/haz-odali-meroora-1.jpeg";
import OszloposMeroora from "@/public/oszlopos-meroora.jpeg";
import BelsoVezetekelesImage from "@/public/belso-vezetekeles.jpeg";
import Image from "next/image";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

export const ReferencesSection = () => {
  return (
    <Section id="references">
      <SectionHeader>Referencia munkáink</SectionHeader>
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="references-grid-area grid place-items-stretch gap-8">
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={HazOldaliMeroora2}
            sizes="(max-width: 48rem) 100vw, 50vw"
            alt="Méröóra állások"
            className="rounded-[1em] object-cover object-center"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={BelsoVezetekelesImage}
            sizes="(max-width: 48rem) 100vw, 50vw"
            alt="Kábelezés"
            className="rounded-[1em] object-cover object-center"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={OszloposMeroora}
            sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 25vw, 50vw"
            alt="Kapcsolótábla"
            className="rounded-[1em] object-cover object-center"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={HazOldaliMeroora1}
            sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 25vw, 50vw"
            alt="Autó töltö állomás"
            className="rounded-[1em] object-cover object-center"
            placeholder="blur"
          />
        </Motion.div>
      </Motion.div>
    </Section>
  );
};
