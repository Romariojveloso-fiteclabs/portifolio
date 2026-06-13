import type React from "react";
import { useCallback } from "react";

export const useDesktopIconDragHandlers = (
  id: string,
  gridX: number,
  gridY: number,
  onDragStart: (id: string, gridX: number, gridY: number, clientX: number, clientY: number) => void
) => {
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      onDragStart(id, gridX, gridY, e.clientX, e.clientY);
    },
    [id, gridX, gridY, onDragStart]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        onDragStart(id, gridX, gridY, touch.clientX, touch.clientY);
      }
    },
    [id, gridX, gridY, onDragStart]
  );

  return { handleMouseDown, handleTouchStart };
};
