import { cn } from "@/app/utils";
import type { ReactNode } from "react";
import { Button } from "../button";

type ContactSectionProps = {
  title: string;
  description: string;
  image: ReactNode;
  align?: "left" | "right";
  className?: string;
  id: string;
};

export const ContactSection = ({ align = "left", id, className, title, description, image }: ContactSectionProps) => {
  const isRight = align === "right";

  return (
    <section id={id} className={cn("mt-48 w-full md:mt-16 lg:mt-24", className)}>
      <div className="mx-auto w-full p-8 lg:max-w-screen-2xl">
        <div
          className={cn(
            "from-primary to-primary-2 relative mx-auto flex w-full grid-cols-1 flex-col-reverse items-center gap-8 rounded-[1em] p-8 text-xl text-white",
            isRight ? "bg-gradient-to-bl md:flex-row-reverse" : "bg-gradient-to-br md:flex-row",
          )}
        >
          <div className="flex flex-col gap-4 md:w-[70%]">
            <h2 className="text-2xl font-bold text-balance lg:text-3xl">{title}</h2>
            <p className="font-semibold text-balance opacity-75">{description}</p>
            <div className="mt-4 flex flex-wrap items-center justify-start gap-4">
              <Button color="white">Hívjon most</Button>
              <span>vagy</span>
              <Button color="white">Írjon emailt</Button>
            </div>
          </div>
          <div
            className={cn(
              "-mt-48 aspect-square max-md:relative max-md:mb-0 max-md:w-full md:absolute md:inset-y-0 md:-mt-24 md:w-1/3 lg:-mt-36",
              isRight ? "md:left-0" : "md:right-0",
            )}
          >
            <div className="md:relative md:h-full md:w-full">{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
