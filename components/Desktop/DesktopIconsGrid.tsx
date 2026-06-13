import React from "react";
import { DesktopGridItem } from "./DesktopGridItem";
import { useDesktopDrag, useDesktopGridStyle } from "../../hooks";
import type { DesktopIconType } from "../../types";

interface DesktopIconsGridProps {
  icons: DesktopIconType[];
  isMobile: boolean;
  onUpdateIconPosition: (id: string, gridX: number, gridY: number) => void;
  onClickIcon: (icon: DesktopIconType) => void;
}

export const DesktopIconsGrid: React.FC<DesktopIconsGridProps> = ({
  icons,
  isMobile,
  onUpdateIconPosition,
  onClickIcon,
}) => {
  const { draggedId, dragOffset, handleStart, isClickBlocked } = useDesktopDrag(
    onUpdateIconPosition,
    isMobile
  );

  const gridStyle = useDesktopGridStyle(isMobile);

  const handleIconClick = (icon: DesktopIconType) => {
    if (isClickBlocked()) return;
    onClickIcon(icon);
  };

  return (
    <div style={gridStyle}>
      {icons.map((icon) => (
        <DesktopGridItem
          key={icon.id}
          icon={icon}
          isMobile={isMobile}
          isDragged={draggedId === icon.id}
          dragOffset={dragOffset}
          onDragStart={handleStart}
          onClick={handleIconClick}
        />
      ))}
    </div>
  );
};
