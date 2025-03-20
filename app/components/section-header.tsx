import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "../utils";

type SectionHeaderProps = PropsWithChildren<HTMLAttributes<HTMLHeadingElement>>;

export const SectionHeader = ({ children, className, ...props }: SectionHeaderProps) => {
  return (
    <div className={cn("mb-em-2 relative overflow-hidden text-4xl leading-tight font-bold lg:text-[clamp(3rem,3.33vw,4rem)]", className)}>
      {/* <div aria-disabled className="from-primary to-primary-2 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-l" />
      <div aria-disabled className="pointer-events-none absolute top-0 left-0 -z-10 select-none">
        <span className="bg-background text-background çdecoration-clone leading-none underline underline-offset-[-1em]">{children}</span>
      </div> */}
      <h2 className="text-gradient from-primary to-primary-2 z-10 inline leading-none" {...props}>
        {children}
      </h2>
    </div>
  );
};
