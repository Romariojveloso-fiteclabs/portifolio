import React from "react";
import { StartMenuItem } from "./StartMenuItem";
import type { DesktopIconType } from "../../types";

interface StartMenuItemsListProps {
  icons: DesktopIconType[];
  onItemClick: (item: DesktopIconType) => void;
}

export const StartMenuItemsList: React.FC<StartMenuItemsListProps> = ({
  icons,
  onItemClick,
}) => {
  return (
    <ul>
      {icons.map((item) => (
        <StartMenuItem
          key={item.id}
          item={item}
          onClick={() => onItemClick(item)}
        />
      ))}
    </ul>
  );
};
