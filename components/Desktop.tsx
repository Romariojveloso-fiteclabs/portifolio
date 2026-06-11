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
    <main className="relative w-full h-full overflow-hidden">
      <div className="absolute inset-0 pb-20 overflow-y-auto p-4 select-none scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
        <DesktopIconsGrid icons={icons} openWindow={openWindow} isMobile={isMobile} />
      </div>
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
