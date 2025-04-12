import BelowTheFoldImage from "@/public/below-the-fold.png";
import { MotionConfig } from "motion/react";
import Image from "next/image";
import { DoubleCheckMarkIcon } from "../icons/double-check-mark";
import { HomeWithManInsideIcon } from "../icons/home-with-man-inside";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";

export const BelowTheFoldSection = () => {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        staggerChildren: 0.1,
        when: "beforeChildren",
      }}
    >
      <Motion.section
        variants={WHILE_IN_VIEW_VARIANTS}
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.2 }}
        id="below-the-fold"
        className="w-full"
      >
        <Motion.div
          variants={WHILE_IN_VIEW_VARIANTS}
          className="mx-auto grid w-full grid-cols-1 place-items-stretch gap-16 p-8 max-md:pt-8 md:w-full md:grid-cols-[1fr_2fr] md:flex-row md:items-center lg:max-w-screen-2xl"
        >
          <Motion.div
            variants={WHILE_IN_VIEW_VARIANTS}
            className="after:bg-tertiary relative mr-8 aspect-square overflow-visible after:absolute after:inset-0 after:-z-10 after:translate-x-8 after:translate-y-8 after:content-['']"
            aria-disabled
          >
            <Image
              fill
              src={BelowTheFoldImage}
              sizes="33vw"
              alt="Csépke Lászlóról munka közben"
              className="object-contain object-center"
              placeholder="blur"
            />
          </Motion.div>
          <Motion.ul
            variants={WHILE_IN_VIEW_VARIANTS}
            className="flex items-center justify-center gap-8 text-xl max-md:flex-wrap md:w-fit md:flex-row md:justify-end md:justify-self-end lg:text-2xl"
          >
            <Motion.li
              variants={WHILE_IN_VIEW_VARIANTS}
              className="from-primary to-primary-2 flex items-center gap-4 rounded-[1em] bg-gradient-to-br p-4 text-white max-md:w-full md:flex-col md:justify-center lg:p-8"
            >
              <HomeWithManInsideIcon variants={WHILE_IN_VIEW_VARIANTS} className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
              <Motion.p variants={WHILE_IN_VIEW_VARIANTS} className="max-w-[20ch] font-bold md:text-center">
                Csak lakossági ügyfelek számára
              </Motion.p>
            </Motion.li>
            <Motion.li
              variants={WHILE_IN_VIEW_VARIANTS}
              className="from-primary to-primary-2 flex items-center gap-4 rounded-[1em] bg-gradient-to-br p-4 text-white max-md:w-full md:flex-col md:justify-center lg:p-8"
            >
              <DoubleCheckMarkIcon variants={WHILE_IN_VIEW_VARIANTS} className="h-[4em] w-[4em] lg:h-[5em] lg:w-[5em]" aria-disabled />
              <Motion.p variants={WHILE_IN_VIEW_VARIANTS} className="max-w-[20ch] font-bold md:text-center">
                Több mint 20 féle szolgáltatás
              </Motion.p>
            </Motion.li>
          </Motion.ul>
        </Motion.div>
      </Motion.section>
    </MotionConfig>
  );
};
