import React, { useMemo } from "react";

export const useWindowStyle = (
  isMaximized: boolean,
  position: { x: number; y: number },
  size: { width: number; height: number },
  zIndex: number,
) => {
  return useMemo(() => {
    const windowStyle: React.CSSProperties = isMaximized
      ? {
          top: 0,
          left: 0,
          width: "100vw",
          height: "calc(100vh - 48px)",
          zIndex,
          transform: "none",
        }
      : {
          top: 0,
          left: 0,
          width: size.width,
          height: size.height,
          zIndex,
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        };
    return windowStyle;
  }, [isMaximized, position, size, zIndex]);
};
