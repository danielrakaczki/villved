"use-client";
import { type RefObject, useLayoutEffect } from "react";

export const useFocusTrap = ({
  isEnabled = true,
  boundingBoxRef,
  triggerPosition,
  triggerRef,
}: {
  isEnabled?: boolean;
  triggerPosition?: "top" | "bottom";
  boundingBoxRef: RefObject<HTMLElement | null>;
  triggerRef: RefObject<HTMLElement | null>;
}) => {
  const boundingBox = boundingBoxRef.current;
  const trigger = triggerRef.current;

  useLayoutEffect(() => {
    function stopScroll(e: Event) {
      e.preventDefault();
      e.stopPropagation();
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        releaseFocus();
        trigger?.click();
        return;
      }
      if (event.key !== "Tab" || !boundingBox || !trigger || !isEnabled) {
        return;
      }

      const focusableElements = boundingBox.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
      );
      const focusableArray = Array.from(focusableElements);

      if (focusableArray.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableArray[0];
      const lastElement = focusableArray[focusableArray.length - 1];

      if (event.shiftKey) {
        // Shift + Tab, move focus backward
        if (document.activeElement === firstElement) {
          if (triggerPosition === "top") {
            trigger.focus();
          } else {
            lastElement.focus();
          }
          event.preventDefault();
        }
      } else {
        // Tab, move focus forward
        if (document.activeElement === lastElement) {
          if (triggerPosition === "top") {
            trigger.focus();
          } else {
            firstElement.focus();
          }
          event.preventDefault();
        }
      }
    }

    function trapFocus() {
      if (boundingBox && trigger && isEnabled) {
        const focusableElements = boundingBox.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );

        // Apply styles to boundingBox & trigger
        boundingBox.style.pointerEvents = "auto";
        trigger.style.pointerEvents = "auto";

        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          boundingBox.focus();
        }

        // Calculate scrollbar width and apply styles to body
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = "hidden";
        document.body.style.pointerEvents = "none";
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    function releaseFocus() {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("scroll", stopScroll);
      trigger?.focus();

      // Remove styles from body
      document.body.style.overflow = "";
      document.body.style.pointerEvents = "auto";
      document.body.style.paddingRight = "";
    }

    if (isEnabled) {
      trapFocus();
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("scroll", stopScroll, { passive: true });
    }

    return releaseFocus;
  }, [boundingBox, trigger, isEnabled]);

  return;
};
