"use client";

import { useImagePlaceholder } from "@/app/hooks/use-image-placeholder";
import Image, { type ImageProps } from "next/image";
import { type RefObject, useRef } from "react";
import { Button } from "../button";
import { CloseIcon } from "../icons/close";

type ImageWithViewerProps = ImageProps & {
  /**
   * For the placeholder
   */
  imagePath: string;
};

export const ImageWithViewer = ({ imagePath, alt, src, ...imageProps }: ImageWithViewerProps) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const placeholder = useImagePlaceholder(imagePath);

  const handleOpen = () => {
    dialogRef.current?.showModal();
  };

  const handleClose = () => {
    dialogRef.current?.close();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        aria-labelledby="image-viewer-title"
        className="m-0 h-full max-h-full w-full max-w-full overflow-hidden bg-transparent p-0 backdrop:bg-black/50"
        onClose={handleClose}
      >
        <h2 id="image-viewer-title" className="sr-only">
          Nagyított kép megtekintése
        </h2>
        <Button
          color="tertiary"
          onClick={handleClose}
          aria-label="Bezárás"
          className="absolute top-4 right-4 z-10 cursor-pointer focus:ring-2 focus:ring-white focus:outline-none"
        >
          <CloseIcon width="1.5rem" height="1.5rem" aria-hidden />
        </Button>
        <div className="grid h-full place-items-stretch p-4 lg:p-16">
          <figure className="relative overflow-hidden rounded-[1em]">
            {placeholder?.base64 && (
              <Image fill src={placeholder?.base64} alt="Háttér" loading="lazy" aria-hidden className="z-0 object-cover object-center" />
            )}
            <Image fill sizes="100vw" loading="lazy" src={src} alt={alt} {...imageProps} className="object-contain" />
            <figcaption className="absolute right-0 bottom-0 left-0 bg-black/50 p-2 text-center text-white italic">{alt}</figcaption>
          </figure>
        </div>
      </dialog>
      <Image
        src={src}
        alt={alt}
        {...imageProps}
        onClick={handleOpen}
        ref={triggerRef as RefObject<HTMLImageElement | null>}
        aria-label="Nézd meg nagyban"
        aria-controls="image-viewer"
      />
    </>
  );
};
