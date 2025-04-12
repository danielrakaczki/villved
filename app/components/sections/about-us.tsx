import TeamWorkingImage from "@/public/team-working.png";
import TeamImage from "@/public/team.png";
import Image from "next/image";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

export const AboutUsSection = () => {
  return (
    <Section id="about-us">
      <SectionHeader>Rólunk</SectionHeader>
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="mb-8 flex flex-col gap-8 md:flex-row">
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative aspect-video md:flex-1">
          <Image
            src={TeamImage}
            sizes="(max-width: 48rem) 100vw, 50vw"
            fill
            placeholder="blur"
            alt="A csapat"
            className="rounded-[1em] object-cover object-[50%_30%]"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="flex flex-col gap-8 md:flex-1">
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS}>
            <Motion.h3 variants={WHILE_IN_VIEW_VARIANTS} className="mb-4 text-2xl font-bold">
              Kik vagyunk mi?
            </Motion.h3>
            <Motion.p variants={WHILE_IN_VIEW_VARIANTS}>
              Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna
              facilisis senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
            </Motion.p>
          </Motion.div>
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS}>
            <Motion.h3 variants={WHILE_IN_VIEW_VARIANTS} className="mb-4 text-2xl font-bold">
              Mik a kompetenciáink?
            </Motion.h3>
            <Motion.p variants={WHILE_IN_VIEW_VARIANTS}>
              Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna
              facilisis senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
            </Motion.p>
          </Motion.div>
        </Motion.div>
      </Motion.div>
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="flex flex-col gap-8 md:flex-row-reverse">
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="relative aspect-video md:flex-1">
          <Image
            src={TeamWorkingImage}
            sizes="(max-width: 48rem) 100vw, 50vw"
            fill
            placeholder="blur"
            alt="A csapat munka közben"
            className="rounded-[1em] object-cover object-center"
          />
        </Motion.div>
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="md:flex-1">
          <Motion.h3 variants={WHILE_IN_VIEW_VARIANTS} className="mb-4 text-2xl font-bold">
            Mik a célunk?
          </Motion.h3>
          <Motion.p variants={WHILE_IN_VIEW_VARIANTS} className="leading-tight">
            Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna facilisis
            senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
          </Motion.p>
        </Motion.div>
      </Motion.div>
    </Section>
  );
};
