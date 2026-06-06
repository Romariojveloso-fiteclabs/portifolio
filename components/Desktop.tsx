import React from "react";
import { DesktopIconsGrid } from "./Desktop/DesktopIconsGrid";
import { DesktopWindows } from "./Desktop/DesktopWindows";
import type { DesktopIconType, WindowInstance, WindowType } from "../types";

interface DesktopProps {
  icons: DesktopIconType[];
  openWindow: (type: WindowType) => void;
  windows: WindowInstance[];
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  isMobile: boolean;
}

export const Desktop: React.FC<DesktopProps> = ({
  icons,
  openWindow,
  windows,
  closeWindow,
  focusWindow,
  minimizeWindow,
  isMobile,
}) => {
  return (
    <main className="w-full h-full p-4">
      <DesktopIconsGrid icons={icons} openWindow={openWindow} />
      <DesktopWindows
        windows={windows}
        closeWindow={closeWindow}
        focusWindow={focusWindow}
        minimizeWindow={minimizeWindow}
        isMobile={isMobile}
      />
    </main>
  );
};
