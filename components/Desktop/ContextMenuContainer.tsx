import React, { useRef } from "react";
import { useContextMenuPosition } from "../../hooks";

interface ContextMenuContainerProps {
  x: number;
  y: number;
  onClose: () => void;
  children: React.ReactNode;
}

export const ContextMenuContainer: React.FC<ContextMenuContainerProps> = ({
  x,
  y,
  onClose,
  children,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const coords = useContextMenuPosition(x, y, menuRef);

  return (
    <div
      ref={menuRef}
      style={{ top: `${coords.y}px`, left: `${coords.x}px` }}
      className="absolute bg-neutral-950/95 border border-amber-500/30 text-neutral-200 rounded-md shadow-2xl backdrop-blur-md py-1 w-48 flex flex-col z-[9999] select-none"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  );
};
