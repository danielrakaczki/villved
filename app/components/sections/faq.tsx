import { FAQS } from "@/app/data/faqs";
import type { FAQPage, WithContext } from "schema-dts";
import { SolidChevronDownIcon } from "../icons/solid-chevron-down";
import { JsonLDScript } from "../json-ld-script";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";
import { Motion } from "../motion/motion";
import { Section } from "../section";
import { SectionHeader } from "../section-header";

type FaqProps = {
  question: string;
  answer: string;
};

const FAQ_JSON_LD: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export const FaqSection = () => {
  return (
    <Section id="faq">
      <JsonLDScript jsonLD={FAQ_JSON_LD} />
      <SectionHeader>Gyakori kérdések</SectionHeader>
      <Motion.div variants={WHILE_IN_VIEW_VARIANTS} initial="hidden" whileInView="shown" className="relative flex flex-col gap-2">
        <Motion.div
          variants={WHILE_IN_VIEW_VARIANTS}
          className="bg-tertiary/10 absolute inset-y-0 left-0 w-2 rounded-l-2xl content-['']"
          aria-disabled
        ></Motion.div>
        {FAQS.map((faq, index) => (
          <Faq key={index} {...faq} />
        ))}
      </Motion.div>
    </Section>
  );
};

const Faq = ({ question, answer }: FaqProps) => {
  return (
    <Motion.details
      variants={WHILE_IN_VIEW_VARIANTS}
      className="group open:bg-tertiary/10 pl-em-4 pr-em-2 has-hover:bg-tertiary/10 has-[summary:hover]:bg-tertiary/10 ml-2 rounded-r-2xl text-2xl lg:text-3xl"
    >
      <Motion.summary variants={WHILE_IN_VIEW_VARIANTS} className="my-em-2 btn-hover cursor-pointer">
        <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="gap- flex items-center justify-between gap-4">
          <Motion.h3 variants={WHILE_IN_VIEW_VARIANTS} className="font-bold">
            {question}
          </Motion.h3>
          <Motion.div
            variants={WHILE_IN_VIEW_VARIANTS}
            className="btn white hover:primary float-right shrink-0 grow-0 self-start text-base"
            aria-disabled
          >
            <SolidChevronDownIcon width="2rem" height="2rem" className="transition-transform ease-in-out group-open:rotate-90" />
          </Motion.div>
        </Motion.div>
      </Motion.summary>
      <p className="text-tertiary mb-em-4 text-lg font-medium">{answer}</p>
    </Motion.details>
  );
};
