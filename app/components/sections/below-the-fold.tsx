import BelowTheFoldImage from "@/public/below-the-fold.png";
import Image from "next/image";
import { DoubleCheckMarkIcon } from "../icons/double-check-mark";
import { HomeWithManInsideIcon } from "../icons/home-with-man-inside";

export const BelowTheFoldSection = () => {
  return (
    <section id="below-the-fold" className="w-full">
      <div className="mx-auto grid w-full grid-cols-1 place-items-stretch gap-16 p-8 max-md:pt-8 md:w-full md:grid-cols-[1fr_2fr] md:flex-row md:items-center lg:max-w-screen-2xl">
        <div
          className="after:bg-tertiary relative mr-8 aspect-square overflow-visible after:absolute after:inset-0 after:-z-10 after:translate-x-8 after:translate-y-8 after:content-['']"
          aria-disabled
        >
          <Image
            fill
            src={BelowTheFoldImage}
            alt="Csépke Lászlóról munka közben"
            objectFit="contain"
            objectPosition="center"
            placeholder="blur"
          />
        </div>
        <ul className="flex items-center justify-center gap-8 text-xl max-md:flex-wrap md:w-fit md:flex-row md:justify-end md:justify-self-end lg:text-2xl">
          <li className="from-primary to-primary-2 flex items-center gap-4 rounded-[1em] bg-gradient-to-br p-4 text-white max-md:w-full md:flex-col md:justify-center lg:p-8">
            <HomeWithManInsideIcon className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
            <p className="max-w-[20ch] font-bold md:text-center">Csak lakossági ügyfelek számára</p>
          </li>
          <li className="from-primary to-primary-2 flex items-center gap-4 rounded-[1em] bg-gradient-to-br p-4 text-white max-md:w-full md:flex-col md:justify-center lg:p-8">
            <DoubleCheckMarkIcon className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
            <p className="max-w-[20ch] font-bold md:text-center">Több mint 20 féle szolgáltatás</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
