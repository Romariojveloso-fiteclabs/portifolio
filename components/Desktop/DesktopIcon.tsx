import React from "react";
import { useDesktopIconStyle, useDesktopIconDragHandlers } from "../../hooks";
import { DesktopIconVisual } from "./DesktopIconVisual";
import { DesktopIconLabel } from "./DesktopIconLabel";

interface DesktopIconProps {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isMobile?: boolean;
  onClick: () => void;
  // Dragging support
  gridX: number;
  gridY: number;
  isDragged: boolean;
  dragOffset: { x: number; y: number };
  onDragStart: (id: string, gridX: number, gridY: number, clientX: number, clientY: number) => void;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  icon: Icon,
  label,
  isMobile,
  onClick,
  gridX,
  gridY,
  isDragged,
  dragOffset,
  onDragStart,
}) => {
  const isBlog = id === "BLOG";
  const showBadge = isBlog && isMobile;

  const style = useDesktopIconStyle(gridX, gridY, isDragged, dragOffset);
  const { handleMouseDown, handleTouchStart } = useDesktopIconDragHandlers(
    id,
    gridX,
    gridY,
    onDragStart
  );

  return (
    <div
      style={style}
      className={`flex flex-col items-center justify-center text-center p-2 rounded hover:bg-amber-500/20 focus:bg-amber-500/30 cursor-pointer transition-all duration-75 select-none group ${
        isDragged ? "opacity-70 scale-95" : ""
      }`}
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      tabIndex={0}
    >
      <DesktopIconVisual icon={Icon} isBlog={isBlog} showBadge={!!showBadge} />
      <DesktopIconLabel label={label} isBlog={isBlog} />
    </div>
  );
};
