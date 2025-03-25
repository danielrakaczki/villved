import { cn } from "@/app/utils";
import { Ref } from "react";

type ButtonProps = {
  ref?: Ref<HTMLButtonElement>;
  color: "primary" | "tertiary" | "white";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, color, ...props }: ButtonProps) => {
  return (
    <button className={cn("btn", color, className)} {...props}>
      {children}
    </button>
  );
};
