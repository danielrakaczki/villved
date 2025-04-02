import { cn } from "@/app/utils";
import { MotionProps } from "motion/react";
import { Ref } from "react";
import { Motion } from "./motion/motion";

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
  color: "primary" | "tertiary" | "white";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, color, ...props }: ButtonProps & MotionProps) => {
  return (
    <Motion.button className={cn("btn", color, className)} {...props}>
      {children}
    </Motion.button>
  );
};
