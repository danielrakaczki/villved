import AutoToltoImage from "@/public/auto-tolto.png";
import KabelezesImage from "@/public/kabelezes.png";
import KapcsolotablaImage from "@/public/kapcsolotabla.png";
import MeroraImage from "@/public/merorak.png";
import Image from "next/image";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

export const ReferencesSection = () => {
  return (
    <Section id="references">
      <SectionHeader>Referencia munkáink</SectionHeader>
      <Motion.div
        variants={WHILE_IN_VIEW_VARIANTS}
        initial="hidden"
        whileInView="shown"
        className="references-grid-area grid place-items-stretch gap-8"
      >
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={MeroraImage}
            alt="Méröóra állások"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={KabelezesImage}
            alt="Kábelezés"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={KapcsolotablaImage}
            alt="Kapcsolótábla"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
          <Image
            fill
            src={AutoToltoImage}
            alt="Autó töltö állomás"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </Motion.div>
      </Motion.div>
    </Section>
  );
};
