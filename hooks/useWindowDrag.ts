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
  const [isMoving, setIsMoving] = useState(false);

  const dragRef = useRef({ isDragging: false, offset: { x: 0, y: 0 } });
  const resizeRef = useRef({
    isResizing: false,
    direction: "",
    startPos: { x: 0, y: 0 },
    startRect: { x: 0, y: 0, width: 0, height: 0 },
  });

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (isMobile || isMaximized) return;
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest(".window-control")) return;
    onFocus();

    dragRef.current = {
      isDragging: true,
      offset: {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      },
    };
    setIsMoving(true);
  }, [isMobile, isMaximized, onFocus, position]);

  const handleResizeStart = useCallback((e: React.MouseEvent<HTMLDivElement>, direction: string) => {
    if (isMobile || isMaximized) return;
    if (e.button !== 0) return;
    e.preventDefault();
    onFocus();

    resizeRef.current = {
      isResizing: true,
      direction,
      startPos: { x: e.clientX, y: e.clientY },
      startRect: { x: position.x, y: position.y, width: size.width, height: size.height },
    };
    setIsMoving(true);
  }, [isMobile, isMaximized, onFocus, position, size]);

  useEffect(() => {
    if (isMoving) {
      document.body.classList.add("window-moving");
    } else {
      document.body.classList.remove("window-moving");
    }
    return () => {
      document.body.classList.remove("window-moving");
    };
  }, [isMoving]);

  useEffect(() => {
    if (!isMoving) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (e.buttons !== 1) {
        dragRef.current.isDragging = false;
        resizeRef.current.isResizing = false;
        setIsMoving(false);
        return;
      }

      if (dragRef.current.isDragging && !isMaximized) {
        setPosition({
          x: e.clientX - dragRef.current.offset.x,
          y: e.clientY - dragRef.current.offset.y,
        });
      } else if (resizeRef.current.isResizing && !isMaximized) {
        const { direction, startPos, startRect } = resizeRef.current;
        const deltaX = e.clientX - startPos.x;
        const deltaY = e.clientY - startPos.y;

        let newWidth = startRect.width;
        let newHeight = startRect.height;
        let newX = startRect.x;
        let newY = startRect.y;

        const minWidth = 300;
        const minHeight = 200;

        if (direction.includes("e")) {
          newWidth = Math.max(minWidth, startRect.width + deltaX);
        } else if (direction.includes("w")) {
          const computedWidth = startRect.width - deltaX;
          if (computedWidth >= minWidth) {
            newWidth = computedWidth;
            newX = startRect.x + deltaX;
          }
        }

        if (direction.includes("s")) {
          newHeight = Math.max(minHeight, startRect.height + deltaY);
        } else if (direction.includes("n")) {
          const computedHeight = startRect.height - deltaY;
          if (computedHeight >= minHeight) {
            newHeight = computedHeight;
            newY = startRect.y + deltaY;
          }
        }

        setPosition({ x: newX, y: newY });
        setSize({ width: newWidth, height: newHeight });
      }
    };

    const handleMouseUp = () => {
      dragRef.current.isDragging = false;
      resizeRef.current.isResizing = false;
      setIsMoving(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("blur", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("blur", handleMouseUp);
    };
  }, [isMoving, isMaximized]);

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
    handleResizeStart,
  };
};

