import { Thing, WithContext } from "schema-dts";

type JsonLDProps = {
  jsonLD: WithContext<Thing>;
};

export const JsonLDScript = ({ jsonLD }: JsonLDProps) => {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }} />;
};
