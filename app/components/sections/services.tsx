import CsaladiHazImage from "@/public/csaladi-haz.png";
import LakossagiVillanyszerelesImage from "@/public/lakossagi-villanyszereles.png";
import MerohelyImage from "@/public/merohely.png";
import NapelemImage from "@/public/napelem.png";
import RegisztraltVillanyszereloImage from "@/public/regisztralt-villanyszerelo.png";
import VbfImage from "@/public/vbf.png";
import { MotionConfig } from "motion/react";
import Image from "next/image";
import type { ReactNode, Ref } from "react";
import { Button } from "../button";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

type ServicesSectionProps = {
  ref?: Ref<HTMLElement>;
};

type ServicesSectionItemProps = {
  image: ReactNode;
  title: string;
};

export const ServicesSection = (props: ServicesSectionProps) => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        staggerChildren: 0.1,
        when: "beforeChildren",
      }}
    >
      <Section id="services" className="mt-16 scroll-mt-16" {...props}>
        <SectionHeader>Szolgáltatásaink</SectionHeader>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ServicesSectionItem
            title="Családi házak, lakások teljes villanyszerelése"
            image={
              <Image
                fill
                src={CsaladiHazImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="Családi ház illusztráció"
                placeholder="blur"
              />
            }
          />
          <ServicesSectionItem
            title="Regisztrált villanyszerelő"
            image={
              <Image
                fill
                src={RegisztraltVillanyszereloImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="Regisztrált villanyszerelő illusztráció"
                placeholder="blur"
              />
            }
          />
          <ServicesSectionItem
            title="Napelem telepítése"
            image={
              <Image
                fill
                src={NapelemImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="Napelem telepítése illusztráció"
                placeholder="blur"
              />
            }
          />
          <ServicesSectionItem
            title="Mérőhely szabványosítás"
            image={
              <Image
                fill
                src={MerohelyImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="Mérőhely szabványosítás illusztráció"
                placeholder="blur"
              />
            }
          />
          <ServicesSectionItem
            title="VBF felülviszgálat"
            image={
              <Image
                fill
                src={VbfImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="VBF felülviszgálat illusztráció"
                placeholder="blur"
              />
            }
          />
          <ServicesSectionItem
            title="Lakossági Villanyszerelés A-Z"
            image={
              <Image
                fill
                src={LakossagiVillanyszerelesImage}
                sizes="(max-width: 48rem) 100vw, (max-width: 96rem) 50vw, 33vw"
                objectFit="cover"
                objectPosition="center"
                alt="Lakossági Villanyszerelés A-Z illusztráció"
                placeholder="blur"
              />
            }
          />
        </Motion.div>
      </Section>
    </MotionConfig>
  );
};

const ServicesSectionItem = ({ image, title }: ServicesSectionItemProps) => {
  return (
    <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative flex flex-col overflow-hidden rounded-[1em] text-2xl">
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative z-0 aspect-video shrink-0 basis-[fit-content]">
        {image}
      </Motion.div>
      <Motion.div
        variants={WHILE_IN_VIEW_VARIANTS}
        className="z-10 flex flex-1 flex-col items-center gap-4 bg-black/20 p-8 backdrop-blur-3xl"
      >
        <Motion.h3 variants={WHILE_IN_VIEW_VARIANTS} className="text-center font-semibold text-white">
          {title}
        </Motion.h3>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="mt-auto w-fit">
          <Button color="white">Hívjon most</Button>
        </Motion.div>
      </Motion.div>
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} aria-disabled className="absolute inset-0 -z-10 content-['']">
        {image}
      </Motion.div>
    </Motion.div>
  );
};
