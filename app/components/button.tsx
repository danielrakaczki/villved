import { cn } from "@/app/utils";
import type { HTMLMotionProps, MotionProps } from "motion/react";
import type { Ref } from "react";
import { Motion } from "./motion/motion";

type ButtonProps = HTMLMotionProps<"button"> & {
  ref?: Ref<HTMLButtonElement>;
  color: "primary" | "tertiary" | "white";
};

export const Button = ({ children, className, color, ...props }: ButtonProps & MotionProps) => {
  return (
    <Motion.button className={cn("btn", color, className)} {...(props as object)}>
      {children}
    </Motion.button>
  );
};
