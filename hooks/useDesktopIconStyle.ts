import type React from "react";

export const useDesktopIconStyle = (
  gridX: number,
  gridY: number,
  isDragged: boolean,
  dragOffset: { x: number; y: number }
): React.CSSProperties => {
  return {
    position: "absolute",
    left: `${gridX * 120}px`,
    top: `${gridY * 120}px`,
    width: "120px",
    height: "120px",
    zIndex: isDragged ? 50 : 10,
    transform: isDragged ? `translate3d(${dragOffset.x}px, ${dragOffset.y}px, 0)` : undefined,
    touchAction: "none",
  };
};
