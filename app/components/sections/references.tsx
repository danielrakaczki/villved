import AutoToltoImage from "@/public/auto-tolto.png";
import KabelezesImage from "@/public/kabelezes.png";
import KapcsolotablaImage from "@/public/kapcsolotabla.png";
import MeroraImage from "@/public/merorak.png";
import { MotionConfig } from "motion/react";
import Image from "next/image";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

export const ReferencesSection = () => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        staggerChildren: 0.1,
        when: "beforeChildren",
      }}
    >
      <Section id="references">
        <SectionHeader>Referencia munkáink</SectionHeader>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="references-grid-area grid place-items-stretch gap-8">
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
            <Image
              fill
              src={MeroraImage}
              sizes="(max-width: 48rem) 100vw, 50vw"
              alt="Méröóra állások"
              className="rounded-[1em] object-cover object-center"
              placeholder="blur"
            />
          </Motion.div>
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
            <Image
              fill
              src={KabelezesImage}
              sizes="(max-width: 48rem) 100vw, 50vw"
              alt="Kábelezés"
              className="rounded-[1em] object-cover object-center"
              placeholder="blur"
            />
          </Motion.div>
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
            <Image
              fill
              src={KapcsolotablaImage}
              sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 25vw, 50vw"
              alt="Kapcsolótábla"
              className="rounded-[1em] object-cover object-center"
              placeholder="blur"
            />
          </Motion.div>
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative" aria-disabled>
            <Image
              fill
              src={AutoToltoImage}
              sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 25vw, 50vw"
              alt="Autó töltö állomás"
              className="rounded-[1em] object-cover object-center"
              placeholder="blur"
            />
          </Motion.div>
        </Motion.div>
      </Section>
    </MotionConfig>
  );
};
