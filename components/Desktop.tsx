import React from "react";
import { DesktopIconsGrid } from "./Desktop/DesktopIconsGrid";
import { DesktopWindows } from "./Desktop/DesktopWindows";
import { ContextMenu } from "./Desktop/ContextMenu";
import { useContextMenu } from "../hooks";
import { WindowType } from "../types";
import type { DesktopIconType, DesktopProps } from "../types";
import { trackEvent } from "../utils/analytics";

export const Desktop: React.FC<DesktopProps> = ({
  icons,
  openWindow,
  windows,
  closeWindow,
  focusWindow,
  minimizeWindow,
  isMobile,
  onSortIcons,
  onResetDesktop,
  onUpdateIconPosition,
}) => {
  const {
    menuState,
    closeMenu,
    handleContextMenuEvent,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useContextMenu();

  const handleOpenIcon = (icon: DesktopIconType) => {
    if (icon.type === "window") {
      openWindow(icon.id as WindowType);
    } else if (icon.type === "link" && icon.url) {
      trackEvent("click_external_link", "Outbound Link", icon.label);
      window.open(icon.url, "_blank", "noopener,noreferrer");
    }
  };

  const handleContextMenuRoot = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".desktop-window-container")) return;
    handleContextMenuEvent(e, null);
  };

  const handleTouchStartRoot = (e: React.TouchEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest(".desktop-window-container")) return;
    handleTouchStart(e, null);
  };

  return (
    <main
      className="relative w-full h-full overflow-hidden"
      onContextMenu={handleContextMenuRoot}
      onTouchStart={handleTouchStartRoot}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute inset-0 pb-20 overflow-y-auto p-4 select-none scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/20 [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-transparent [&::-webkit-scrollbar-thumb]:bg-clip-padding [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/40">
        <DesktopIconsGrid
          icons={icons}
          isMobile={isMobile}
          onUpdateIconPosition={onUpdateIconPosition}
          onClickIcon={handleOpenIcon}
        />
      </div>

      <DesktopWindows
        windows={windows}
        closeWindow={closeWindow}
        focusWindow={focusWindow}
        minimizeWindow={minimizeWindow}
        isMobile={isMobile}
      />

      {menuState.isOpen && (
        <ContextMenu
          x={menuState.x}
          y={menuState.y}
          onClose={closeMenu}
          onSortIcons={onSortIcons}
          onResetDesktop={onResetDesktop}
        />
      )}
    </main>
  );
};
