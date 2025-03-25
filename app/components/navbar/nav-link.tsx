"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLAttributes } from "react";
import { cn } from "../../utils";

export const NavLink = ({ children, className, ...props }: HTMLAttributes<HTMLAnchorElement> & LinkProps) => {
  const pathName = usePathname();
  const hrefPath = typeof props.href === "string" ? props.href : (props.href.pathname ?? "");
  const isActive = hrefPath ? pathName.includes(hrefPath) : false;

  return (
    <Link {...props} className={cn(isActive ? "text-primary" : "text-foreground", "btn white", className)}>
      {children}
    </Link>
  );
};
