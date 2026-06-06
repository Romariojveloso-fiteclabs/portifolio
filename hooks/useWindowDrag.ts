import React, { useState, useRef, useCallback, useEffect } from "react";
import type { UseWindowDragProps } from "../types";

export const useWindowDrag = ({
  initialPosition,
  initialSize,
  isMobile,
  onFocus,
}: UseWindowDragProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [preMaximizeState, setPreMaximizeState] = useState({ position, size });

  const dragRef = useRef({ isDragging: false, offset: { x: 0, y: 0 } });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile) return;
    onFocus();
    if ((e.target as HTMLElement).closest(".window-control")) return;

    dragRef.current = {
      isDragging: true,
      offset: {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      },
    };
  }, [isMobile, onFocus, position]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile) return;
    if (dragRef.current.isDragging && !isMaximized) {
      setPosition({
        x: e.clientX - dragRef.current.offset.x,
        y: e.clientY - dragRef.current.offset.y,
      });
    }
  }, [isMaximized, isMobile]);

  const handleMouseUp = useCallback(() => {
    dragRef.current.isDragging = false;
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  const toggleMaximize = useCallback(() => {
    if (isMobile) return;
    if (isMaximized) {
      setPosition(preMaximizeState.position);
      setSize(preMaximizeState.size);
      setIsMaximized(false);
    } else {
      setPreMaximizeState({ position, size });
      setPosition({ x: 0, y: 0 });
      const taskbarHeight = 48;
      setSize({
        width: window.innerWidth,
        height: window.innerHeight - taskbarHeight,
      });
      setIsMaximized(true);
    }
  }, [isMaximized, isMobile, position, size, preMaximizeState]);

  return {
    position,
    size,
    isMaximized,
    handleMouseDown,
    toggleMaximize,
  };
};
