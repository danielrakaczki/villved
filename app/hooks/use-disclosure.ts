import { useState, useCallback } from "react";

export const useDisclosure = (props?: { initialOpen?: boolean; onOpen?: () => void; onClose?: () => void }) => {
  const { initialOpen = false, onOpen, onClose } = props ?? {};
  const [isOpen, setIsOpen] = useState(initialOpen);

  const open = useCallback(() => {
    setIsOpen(true);
    onOpen?.();
  }, [onOpen]);

  const close = useCallback(() => {
    setIsOpen(false);
    onClose?.();
  }, [onClose]);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isOpen ? onClose?.() : onOpen?.();
  }, [isOpen, onOpen, onClose]);

  return { isOpen, open, close, toggle };
};
