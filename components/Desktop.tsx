import React from "react";
import { DesktopIconsGrid } from "./Desktop/DesktopIconsGrid";
import { DesktopWindows } from "./Desktop/DesktopWindows";
import type { DesktopProps } from "../types";

const CONTAINER_CLASS = "w-full h-full p-4";

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
    <main className={CONTAINER_CLASS}>
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
