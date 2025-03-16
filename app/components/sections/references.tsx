import Image from "next/image";

export const ReferencesSection = () => {
  return (
    <section id="referencies" className="grid w-full">
      <div className="references-grid-area mx-auto grid w-full place-items-stretch gap-8 p-8 lg:max-w-screen-2xl">
        <div className="relative" aria-disabled>
          <Image
            fill
            src="/merorak.png"
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
            src="/kabelezes.png"
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
            src="/kapcsolotabla.png"
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
            src="/auto-tolto.png"
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
