import Image from "next/image";
import TeamImage from "@/public/team.png";
import TeamWorkingImage from "@/public/team-working.png";
import { SectionHeader } from "../section-header";
import { Section } from "../section";

export const AboutUsSection = () => {
  return (
    <Section id="about-us">
      <SectionHeader>Rólunk</SectionHeader>
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="relative aspect-video md:flex-1">
          <Image
            src={TeamImage}
            fill
            objectFit="cover"
            objectPosition="50% 30%"
            placeholder="blur"
            alt="A csapat"
            className="rounded-[1em]"
          />
        </div>
        <div className="flex flex-col gap-8 md:flex-1">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Kik vagyunk mi?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna
              facilisis senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold">Mik a kompetenciáink?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna
              facilisis senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:flex-row-reverse">
        <div className="relative aspect-video md:flex-1">
          <Image
            src={TeamWorkingImage}
            fill
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            alt="A csapat munka közben"
            className="rounded-[1em]"
          />
        </div>
        <div className="md:flex-1">
          <h3 className="mb-4 text-2xl font-bold">Mik a célunk?</h3>
          <p className="leading-tight">
            Lorem ipsum dolor sit amet consectetur. Lectus tristique dignissim egestas risus arcu ornare sit ipsum. Integer magna facilisis
            senectus a integer. Id mollis a pulvinar suspendisse maecenas aliquet.
          </p>
        </div>
      </div>
    </Section>
  );
};
