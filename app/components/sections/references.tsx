import AutoToltoImage from "@/public/auto-tolto.png";
import KabelezesImage from "@/public/kabelezes.png";
import KapcsolotablaImage from "@/public/kapcsolotabla.png";
import MeroraImage from "@/public/merorak.png";
import Image from "next/image";
import { SectionHeader } from "../section-header";
import { Section } from "../section";

export const ReferencesSection = () => {
  return (
    <Section id="references">
      <SectionHeader>Referencia munkáink</SectionHeader>
      <div className="references-grid-area grid place-items-stretch gap-8">
        <div className="relative" aria-disabled>
          <Image
            fill
            src={MeroraImage}
            alt="Méröóra állások"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </div>
        <div className="relative" aria-disabled>
          <Image
            fill
            src={KabelezesImage}
            alt="Kábelezés"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </div>
        <div className="relative" aria-disabled>
          <Image
            fill
            src={KapcsolotablaImage}
            alt="Kapcsolótábla"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </div>
        <div className="relative" aria-disabled>
          <Image
            fill
            src={AutoToltoImage}
            alt="Autó töltö állomás"
            objectFit="cover"
            objectPosition="center"
            className="rounded-[1em]"
            placeholder="blur"
          />
        </div>
      </div>
    </Section>
  );
};
