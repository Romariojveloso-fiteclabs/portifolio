import React from "react";
import type { DesktopIconType } from "../../types";

interface StartMenuItemProps {
  item: DesktopIconType;
  onClick: () => void;
}

export const StartMenuItem: React.FC<StartMenuItemProps> = ({
  item,
  onClick,
}) => {
  const Icon = item.icon;
  return (
    <li>
      <button
        onClick={onClick}
        className="w-full text-left flex items-center gap-3 px-4 py-3 hover:bg-amber-800/50 transition-colors"
      >
        <Icon className="w-6 h-6" />
        <span>{item.label}</span>
      </button>
    </li>
  );
};
