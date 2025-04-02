import { cn } from "@/app/utils";
import type { ReactNode } from "react";
import { Button } from "../button";
import { Motion } from "../motion/motion";
import { WHILE_IN_VIEW_VARIANTS } from "../motion/animations";

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
        <Motion.div
          variants={WHILE_IN_VIEW_VARIANTS}
          initial="hidden"
          whileInView="shown"
          className={cn(
            "from-primary to-primary-2 relative mx-auto flex w-full grid-cols-1 flex-col-reverse items-center gap-8 rounded-[1em] p-8 text-xl text-white",
            isRight ? "bg-gradient-to-bl md:flex-row-reverse" : "bg-gradient-to-br md:flex-row",
          )}
        >
          <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="flex flex-col gap-4 md:w-[70%]">
            <Motion.h2 variants={WHILE_IN_VIEW_VARIANTS} className="text-2xl font-bold text-balance lg:text-3xl">
              {title}
            </Motion.h2>
            <Motion.p variants={WHILE_IN_VIEW_VARIANTS} className="font-semibold text-balance opacity-75">
              {description}
            </Motion.p>
            <Motion.div variants={WHILE_IN_VIEW_VARIANTS} className="mt-4 flex flex-wrap items-center justify-start gap-4">
              <Motion.div variants={WHILE_IN_VIEW_VARIANTS}>
                <Button color="white">Hívjon most</Button>
              </Motion.div>
              <Motion.span variants={WHILE_IN_VIEW_VARIANTS}>vagy</Motion.span>
              <Motion.div variants={WHILE_IN_VIEW_VARIANTS}>
                <Button color="white">Írjon emailt</Button>
              </Motion.div>
            </Motion.div>
          </Motion.div>
          <Motion.div
            variants={WHILE_IN_VIEW_VARIANTS}
            className={cn(
              "-mt-48 aspect-square max-md:relative max-md:mb-0 max-md:w-full md:absolute md:inset-y-0 md:-mt-24 md:w-1/3 lg:-mt-36",
              isRight ? "md:left-0" : "md:right-0",
            )}
          >
            <div className="md:relative md:h-full md:w-full">{image}</div>
          </Motion.div>
        </Motion.div>
      </div>
    </section>
  );
};
