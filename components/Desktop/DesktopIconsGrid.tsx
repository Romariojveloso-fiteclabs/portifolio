import React, { useCallback } from "react";
import { DesktopIcon } from "./DesktopIcon";
import type { DesktopIconType, WindowType } from "../../types";

interface DesktopIconsGridProps {
  icons: DesktopIconType[];
  openWindow: (type: WindowType) => void;
}

export const DesktopIconsGrid: React.FC<DesktopIconsGridProps> = ({
  icons,
  openWindow,
}) => {
  const handleClick = useCallback(
    (icon: DesktopIconType) => {
      if (icon.type === "window") {
        openWindow(icon.id as WindowType);
      } else if (icon.type === "link" && icon.url) {
        window.open(icon.url, "_blank", "noopener,noreferrer");
      }
    },
    [openWindow],
  );

  return (
    <div className="grid grid-cols-3 gap-y-4 justify-items-center md:flex md:flex-col md:flex-wrap md:h-full md:content-start md:justify-start md:gap-0">
      {icons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          icon={icon.icon}
          label={icon.label}
          onClick={() => handleClick(icon)}
        />
      ))}
    </div>
  );
};
