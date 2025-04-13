import type { MotionProps } from "motion/react";
import type { SVGProps } from "react";
import { Motion } from "../motion/motion";

export const SolidChevronDownIcon = (props: SVGProps<SVGSVGElement> & MotionProps) => (
  <Motion.svg width="1em" height="1em" viewBox="0 0 32 33" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...(props as object)}>
    <path d="M16.4934 21.4159L25.0668 12.5759C25.6014 12.0226 25.2774 10.9692 24.5734 10.9692L7.42675 10.9692C6.72275 10.9692 6.39875 12.0226 6.93342 12.5759L15.5068 21.4159C15.7908 21.7092 16.2094 21.7092 16.4934 21.4159Z" />
  </Motion.svg>
);
