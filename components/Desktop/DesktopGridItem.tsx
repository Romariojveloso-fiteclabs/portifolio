import React from "react";
import { DesktopIcon } from "./DesktopIcon";
import type { DesktopIconType } from "../../types";

interface DesktopGridItemProps {
  icon: DesktopIconType;
  isMobile: boolean;
  isDragged: boolean;
  dragOffset: { x: number; y: number };
  onDragStart: (id: string, gridX: number, gridY: number, clientX: number, clientY: number) => void;
  onClick: (icon: DesktopIconType) => void;
}

export const DesktopGridItem: React.FC<DesktopGridItemProps> = ({
  icon,
  isMobile,
  isDragged,
  dragOffset,
  onDragStart,
  onClick,
}) => {
  const handleItemClick = () => {
    onClick(icon);
  };

  return (
    <DesktopIcon
      id={icon.id}
      icon={icon.icon}
      label={icon.label}
      isMobile={isMobile}
      gridX={icon.gridX ?? 0}
      gridY={icon.gridY ?? 0}
      isDragged={isDragged}
      dragOffset={dragOffset}
      onDragStart={onDragStart}
      onClick={handleItemClick}
    />
  );
};
