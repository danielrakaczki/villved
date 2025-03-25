"use client";

import { useRef } from "react";
import { NavLink } from "./nav-link";
import { useFocusTrap } from "@/app/hooks/use-focus-trap";
import { Button } from "../button";
import { useDisclosure } from "@/app/hooks/use-disclosure";
import { cn } from "@/app/utils";

export const NavbarMobile = () => {
  const { isOpen, toggle, close } = useDisclosure({ onOpen: setScrollWidth(true), onClose: setScrollWidth(false) });
  const triggerRef = useRef<HTMLButtonElement>(null);
  const boundingBoxRef = useRef<HTMLDivElement>(null);
  useFocusTrap({ isEnabled: isOpen, boundingBoxRef, triggerRef });

  function setScrollWidth(open: boolean) {
    return () =>
      boundingBoxRef.current?.style.setProperty(
        "--scrollbar-width",
        `${open ? window.innerWidth - document.documentElement.clientWidth : 0}px`,
      );
  }

  return (
    <>
      <div
        className={cn(
          "lg:hidden",
          "pointer-events-none fixed inset-0 z-30 bg-black/30 opacity-0 backdrop-blur-lg transition-all duration-300 ease-in-out",
          {
            "pointer-events-auto opacity-100": isOpen,
            "pointer-events-none opacity-0": !isOpen,
          },
        )}
        aria-disabled
      />
      <div
        ref={boundingBoxRef}
        className="z-40 pr-[var(--scrollbar-width)] max-lg:fixed max-lg:right-4 max-lg:bottom-4 max-lg:z-40 max-lg:flex max-lg:flex-col max-lg:items-end max-lg:justify-items-end lg:hidden"
      >
        <nav
          id="mobile-navigation"
          aria-hidden={!isOpen}
          className={cn("lg:hidden", {
            "pointer-events-auto scale-100 opacity-100": isOpen,
            "pointer-events-none scale-90 opacity-0": !isOpen,
          })}
        >
          <div className={"mb-4 flex flex-col items-end justify-items-end gap-4"}>
            <NavLink href="#services" onClick={close} tabIndex={isOpen ? 0 : -1}>
              Szolgáltatásaink
            </NavLink>
            <NavLink href="#references" onClick={close} tabIndex={isOpen ? 0 : -1}>
              Referenciák
            </NavLink>
            <NavLink href="#about-us" onClick={close} tabIndex={isOpen ? 0 : -1}>
              Rólunk
            </NavLink>
            <NavLink href="#faq" onClick={close} tabIndex={isOpen ? 0 : -1}>
              GYIK
            </NavLink>
          </div>
        </nav>
        <Button ref={triggerRef} color="primary" onClick={toggle} aria-expanded={isOpen} aria-controls="mobile-navigation">
          Menü
        </Button>
      </div>
    </>
  );
};
