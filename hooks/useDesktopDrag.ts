import { useState, useEffect, useRef, useCallback } from "react";

export const useDesktopDrag = (
  onUpdatePosition: (id: string, gridX: number, gridY: number) => void,
  isMobile: boolean,
  cellWidth = 120,
  cellHeight = 120
) => {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const startPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const initialGrid = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hasMovedRef = useRef<boolean>(false);
  const wasDraggingRef = useRef<boolean>(false);

  const handleStart = useCallback(
    (id: string, initialX: number, initialY: number, clientX: number, clientY: number) => {
      setDraggedId(id);
      startPos.current = { x: clientX, y: clientY };
      initialGrid.current = { x: initialX, y: initialY };
      setDragOffset({ x: 0, y: 0 });
      hasMovedRef.current = false;
      wasDraggingRef.current = false;
    },
    []
  );

  const handleMove = useCallback(
    (clientX: number, clientY: number) => {
      if (!draggedId) return;
      const deltaX = clientX - startPos.current.x;
      const deltaY = clientY - startPos.current.y;

      if (Math.abs(deltaX) > 5 || Math.abs(deltaY) > 5) {
        hasMovedRef.current = true;
      }

      setDragOffset({ x: deltaX, y: deltaY });
    },
    [draggedId]
  );

  const handleEnd = useCallback(() => {
    if (!draggedId) return;

    if (hasMovedRef.current) {
      wasDraggingRef.current = true;
      setTimeout(() => {
        wasDraggingRef.current = false;
      }, 100);

      const currentPixelX = initialGrid.current.x * cellWidth + dragOffset.x;
      const currentPixelY = initialGrid.current.y * cellHeight + dragOffset.y;

      let newGridX = Math.round(currentPixelX / cellWidth);
      let newGridY = Math.round(currentPixelY / cellHeight);

      if (newGridX < 0) newGridX = 0;
      if (newGridY < 0) newGridY = 0;

      const maxRows = isMobile ? 8 : 5;
      const maxCols = isMobile ? 3 : 10;
      if (newGridX >= maxCols) newGridX = maxCols - 1;
      if (newGridY >= maxRows) newGridY = maxRows - 1;

      onUpdatePosition(draggedId, newGridX, newGridY);
    }

    setDraggedId(null);
    setDragOffset({ x: 0, y: 0 });
  }, [draggedId, dragOffset, cellWidth, cellHeight, isMobile, onUpdatePosition]);

  useEffect(() => {
    if (!draggedId) return;

    const onMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    const onMouseUp = () => {
      handleEnd();
    };

    const onTouchEnd = () => {
      handleEnd();
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [draggedId, handleMove, handleEnd]);

  return {
    draggedId,
    dragOffset,
    hasMoved: hasMovedRef.current,
    handleStart,
    isClickBlocked: () => wasDraggingRef.current,
  };
};
