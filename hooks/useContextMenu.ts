import { useState, useEffect, useCallback, useRef } from "react";

export interface ContextMenuState {
  isOpen: boolean;
  x: number;
  y: number;
  targetIconId: string | null;
}

export const useContextMenu = () => {
  const [menuState, setMenuState] = useState<ContextMenuState>({
    isOpen: false,
    x: 0,
    y: 0,
    targetIconId: null,
  });

  const touchTimer = useRef<NodeJS.Timeout | null>(null);
  const touchStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const openMenu = useCallback((clientX: number, clientY: number, iconId: string | null = null) => {
    setMenuState({
      isOpen: true,
      x: clientX,
      y: clientY,
      targetIconId: iconId,
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMenuState((prev) => (prev.isOpen ? { ...prev, isOpen: false } : prev));
  }, []);

  const handleContextMenuEvent = useCallback(
    (e: MouseEvent, iconId: string | null = null) => {
      e.preventDefault();
      e.stopPropagation();
      openMenu(e.clientX, e.clientY, iconId);
    },
    [openMenu]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent, iconId: string | null = null) => {
      if (e.touches.length === 0) return;
      const touch = e.touches[0];
      touchStartPos.current = { x: touch.clientX, y: touch.clientY };

      if (touchTimer.current) clearTimeout(touchTimer.current);

      touchTimer.current = setTimeout(() => {
        if (typeof navigator !== "undefined" && navigator.vibrate) {
          navigator.vibrate(50);
        }
        openMenu(touch.clientX, touch.clientY, iconId);
      }, 500);
    },
    [openMenu]
  );

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const diffX = Math.abs(touch.clientX - touchStartPos.current.x);
    const diffY = Math.abs(touch.clientY - touchStartPos.current.y);

    if (diffX > 10 || diffY > 10) {
      if (touchTimer.current) {
        clearTimeout(touchTimer.current);
        touchTimer.current = null;
      }
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (touchTimer.current) {
      clearTimeout(touchTimer.current);
      touchTimer.current = null;
    }
  }, []);

  useEffect(() => {
    if (!menuState.isOpen) return;

    const handleOutsideClick = () => {
      closeMenu();
    };

    window.addEventListener("click", handleOutsideClick);
    window.addEventListener("touchend", handleOutsideClick);
    window.addEventListener("resize", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("touchend", handleOutsideClick);
      window.removeEventListener("resize", handleOutsideClick);
    };
  }, [menuState.isOpen, closeMenu]);

  return {
    menuState,
    openMenu,
    closeMenu,
    handleContextMenuEvent,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
