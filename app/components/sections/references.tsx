import AutoToltoImage from "@/public/auto-tolto.png";
import KabelezesImage from "@/public/kabelezes.png";
import KapcsolotablaImage from "@/public/kapcsolotabla.png";
import MeroraImage from "@/public/merorak.png";
import Image from "next/image";

export const ReferencesSection = () => {
  return (
    <section id="referencies" className="grid w-full">
      <div className="references-grid-area mx-auto grid w-full place-items-stretch gap-8 p-8 lg:max-w-screen-2xl">
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
    </section>
  );
};
