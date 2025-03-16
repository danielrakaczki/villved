import { cn } from "@/app/utils";

type ButtonProps = {
  color: "primary" | "tertiary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, color, ...props }: ButtonProps) => {
  return (
    <button className={cn("btn", color, className)} {...props}>
      {children}
    </button>
  );
};
