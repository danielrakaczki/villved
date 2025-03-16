import type { ReactNode } from "react";
import { Button } from "../button";
import Image from "next/image";

type ServicesSectionItemProps = {
  image: ReactNode;
  title: string;
};

export const ServicesSection = () => {
  return (
    <section className="mx-auto mt-16 flex w-full lg:max-w-screen-2xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ServicesSectionItem
          title="Családi házak, lakások teljes villanyszerelése"
          image={<Image fill src="/csaladi-haz.png" objectFit="cover" objectPosition="center" alt="Családi ház illusztráció" />}
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
            />
          }
        />
        <ServicesSectionItem
          title="Napelem telepítése"
          image={<Image fill src="/napelem.png" objectFit="cover" objectPosition="center" alt="Napelem telepítése illusztráció" />}
        />
        <ServicesSectionItem
          title="Mérőhely szabványosítás"
          image={<Image fill src="/merohely.png" objectFit="cover" objectPosition="center" alt="Mérőhely szabványosítás illusztráció" />}
        />
        <ServicesSectionItem
          title="VBF felülviszgálat"
          image={<Image fill src="/vbf.png" objectFit="cover" objectPosition="center" alt="VBF felülviszgálat illusztráció" />}
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
      <div className="relative aspect-video shrink-0 basis-[fit-content]">{image}</div>
      <div className="flex flex-1 flex-col items-center gap-4 bg-black/20 p-8 backdrop-blur-3xl">
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
