import React, { useRef } from "react";
import { useClickOutside, usePWAInstall } from "../hooks";
import { StartMenuHeader } from "./StartMenu/StartMenuHeader";
import { StartMenuItemsList } from "./StartMenu/StartMenuItemsList";
import { useStartMenu } from "./StartMenu/useStartMenu";
import type { StartMenuProps } from "../types";
import "./StartMenu/StartMenu.css";

export const StartMenu: React.FC<StartMenuProps> = ({
  icons,
  onOpen,
  onClose,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useClickOutside(menuRef, onClose);
  const { handleItemClick } = useStartMenu(onOpen, onClose);
  const { isInstallable, install } = usePWAInstall();

  return (
    <div ref={menuRef} className="start-menu-container">
      <StartMenuHeader />
      <StartMenuItemsList icons={icons} onItemClick={handleItemClick} />
      {isInstallable && (
        <div className="p-3 border-t border-amber-600/30 flex justify-center bg-amber-600/5">
          <button
            onClick={() => {
              install();
              onClose();
            }}
            className="w-full py-1.5 px-3 bg-amber-600 hover:bg-amber-500 active:bg-amber-700 text-slate-950 font-bold rounded text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            Instalar RomaOS
          </button>
        </div>
      )}
    </div>
  );
};