"use client";

import { useDisclosure } from "@/app/hooks/use-disclosure";
import { CloseIcon } from "../icons/close";
import Image, { ImageProps } from "next/image";
import { Motion } from "../motion/motion";
import { RefObject, useRef } from "react";
import { cn } from "@/app/utils";
import { Button } from "../button";
import { useFocusTrap } from "@/app/hooks/use-focus-trap";
import { useImagePlaceholder } from "@/app/hooks/use-image-placeholder";

type ImageWithViewerProps = ImageProps & {
  /**
   * For the placeholder
   */
  imagePath: string;
};

export const ImageWithViewer = ({ imagePath, alt, src, ...imageProps }: ImageWithViewerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const boundingBoxRef = useRef<HTMLDivElement>(null);

  const { isOpen, open, close } = useDisclosure();
  const placeholder = useImagePlaceholder(imagePath);

  console.log(placeholder);

  useFocusTrap({ isEnabled: isOpen, boundingBoxRef, triggerRef });

  return (
    <>
      <Motion.div
        ref={boundingBoxRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="image-viewer-title"
        className={cn("inset-0 z-[100] overflow-hidden", isOpen ? "fixed" : "hidden")}
        animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      >
        <div className="pointer-events-auto absolute inset-0 h-full w-full cursor-pointer bg-black/75" onClick={close} />
        <h2 id="image-viewer-title" className="sr-only">
          Nagyított kép megtekintése
        </h2>
        <Button
          color="tertiary"
          onClick={close}
          aria-label="Bezárás"
          aria-controls="image-viewer"
          className="absolute top-[calc(1rem+2px)] right-4 z-10 cursor-pointer focus:ring-2 focus:ring-white focus:outline-none"
        >
          <CloseIcon width="1.5rem" height="1.5rem" aria-hidden />
        </Button>
        <div id="image-viewer" className="grid h-full place-items-stretch p-4 lg:p-16">
          <figure className="relative overflow-hidden rounded-[1em] bg-black">
            {placeholder?.base64 && (
              <Image fill src={placeholder?.base64} alt="Háttér" loading="lazy" aria-hidden className="z-0 object-cover object-center" />
            )}
            <Image fill sizes="100vw" loading="lazy" src={src} alt={alt} {...imageProps} className="object-contain" />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-black/50 p-2 text-center text-white italic">{alt}</figcaption>
          </figure>
        </div>
      </Motion.div>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        onClick={open}
        ref={triggerRef as RefObject<HTMLImageElement | null>}
        aria-label="Nézd meg nagyban"
        aria-controls="image-viewer"
      />
    </>
  );
};
