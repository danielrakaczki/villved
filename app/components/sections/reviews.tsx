import ReviewImage1 from "@/public/review-1.png";
import ReviewImage2 from "@/public/review-2.png";
import ReviewImage3 from "@/public/review-3.png";
import Image, { type StaticImageData } from "next/image";
import { StartIcon } from "../icons/star";
import { Section } from "../section";

type ReviewProps = {
  image: StaticImageData;
  name: string;
  service: string;
  review: string;
  stars: 1 | 2 | 3 | 4 | 5;
};

export const ReviewsSection = () => {
  return (
    <Section id="reviews" className="relative overflow-hidden">
      {/* <h2 className="text-tertiary/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(5rem,10vw,30rem)] font-bold whitespace-nowrap uppercase select-none max-md:hidden">
        A Ti véleményetek
      </h2> */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Review
          name="Dániel"
          service="Általános lakossági karbantartás"
          review="A megbeszélt időpontra érkezett, gyorsan készen voltak!"
          stars={5}
          image={ReviewImage1}
        />
        <Review
          name="György"
          service="Teljes lakás átvezetékelés"
          review="Minden rendben ment, kiváló minőségi munka!"
          stars={5}
          image={ReviewImage2}
        />
        <Review name="Anna" service="Mérőóra kiállás" review="Minden rendben ment, kiváló minőségi munka!" stars={5} image={ReviewImage3} />
      </div>
    </Section>
  );
};

const Review = ({ image, name, service, review, stars }: ReviewProps) => {
  return (
    <div className="bg-primary/5 flex flex-col items-center rounded-2xl p-8 text-center">
      <Image
        src={image}
        alt={name}
        width={64}
        height={64}
        placeholder="blur"
        className="rounded-full"
        objectPosition="center"
        objectFit="cover"
      />
      <p className="text-2xl leading-tight font-bold">{name}</p>
      <p className="my-em-4 text-tertiary leading-tight font-medium">{service}</p>
      <p className="mb-em-4 max-w-[350px] flex-1 text-xl leading-tight font-semibold text-balance italic">&quot;{review}&quot;</p>
      <div className="stars flex items-center justify-center gap-4">
        {Array.from({ length: stars }).map((_, i) => (
          <StartIcon key={i} className="star" />
        ))}
      </div>
    </div>
  );
};
