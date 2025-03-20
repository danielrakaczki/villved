import { FAQS } from "@/app/data/faqs";
import { Section } from "../section";
import { SectionHeader } from "../section-header";
import { SolidChevronDownIcon } from "../icons/solid-chevron-down";

type FaqProps = {
  question: string;
  answer: string;
};

export const FaqSection = () => {
  return (
    <Section id="faq">
      <SectionHeader>Gyakori kérdések</SectionHeader>
      <div className="relative flex flex-col gap-2">
        <div className="bg-tertiary/10 absolute inset-y-0 left-0 w-2 rounded-l-2xl content-['']" aria-disabled></div>
        {FAQS.map((faq, index) => (
          <Faq key={index} {...faq} />
        ))}
      </div>
    </Section>
  );
};

const Faq = ({ question, answer }: FaqProps) => {
  return (
    <details className="group open:bg-tertiary/10 pl-em-4 pr-em-2 has-hover:bg-tertiary/10 has-[summary:hover]:bg-tertiary/10 ml-2 rounded-r-2xl text-2xl lg:text-3xl">
      <summary className="my-em-2 btn-hover cursor-pointer">
        <div className="gap- flex items-center justify-between gap-4">
          <h3 className="font-bold">{question}</h3>
          <div className="btn white hover:primary float-right shrink-0 grow-0 self-start text-base" aria-disabled>
            <SolidChevronDownIcon width="2rem" height="2rem" className="transition-transform ease-in-out group-open:rotate-90" />
          </div>
        </div>
      </summary>
      <p className="text-tertiary mb-em-4 text-lg font-medium">{answer}</p>
    </details>
  );
};

// import { Product, WithContext } from 'schema-dts'

// const jsonLd: WithContext<Product> = {
//   '@context': 'https://schema.org',
//   '@type': 'Product',
//   name: 'Next.js Sticker',
//   image: 'https://nextjs.org/imgs/sticker.png',
//   description: 'Dynamic at the speed of static.',
// }
// Context to use:
// {
//   "@context": "https://schema.org",
//   "@type": "FAQPage",
//   "mainEntity": [
//     {
//       "@type": "Question",
//       "name": "What is the best way to structure an FAQ?",
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": "Use semantic HTML, structured data, and clear headings."
//       }
//     }
//   ]
// }
