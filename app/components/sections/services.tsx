import type { ReactNode, Ref } from "react";
import { Button } from "../button";
import Image from "next/image";

type ServicesSectionProps = {
  ref?: Ref<HTMLElement>;
};

type ServicesSectionItemProps = {
  image: ReactNode;
  title: string;
};

export const ServicesSection = (props: ServicesSectionProps) => {
  return (
    <section className="mt-16 w-full scroll-mt-16" {...props}>
      <div className="mx-auto grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3">
        <ServicesSectionItem
          title="Családi házak, lakások teljes villanyszerelése"
          image={
            <Image
              fill
              src="/csaladi-haz.png"
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
              src="/regisztralt-villanyszerelo.png"
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
              src="/napelem.png"
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
              src="/merohely.png"
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
            <Image fill src="/vbf.png" objectFit="cover" objectPosition="center" alt="VBF felülviszgálat illusztráció" placeholder="blur" />
          }
        />
        <ServicesSectionItem
          title="Lakossági Villanyszerelés A-Z"
          image={
            <Image
              fill
              src="/lakossagi-villanyszereles.png"
              objectFit="cover"
              objectPosition="center"
              alt="Lakossági Villanyszerelés A-Z illusztráció"
              placeholder="blur"
            />
          }
        />
      </div>
    </section>
  );
};

const ServicesSectionItem = ({ image, title }: ServicesSectionItemProps) => {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[1em] text-2xl">
      <div className="relative z-0 aspect-video shrink-0 basis-[fit-content]">{image}</div>
      <div className="z-10 flex flex-1 flex-col items-center gap-4 bg-black/20 p-8 backdrop-blur-3xl">
        <h3 className="text-center font-semibold text-white">{title}</h3>
        <Button color="white" className="mt-auto w-fit">
          Hívjon most
        </Button>
      </div>
      <div aria-disabled className="absolute inset-0 -z-10 content-['']">
        {image}
      </div>
    </div>
  );
};
