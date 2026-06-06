import React, { useRef } from "react";
import { useClickOutside } from "../hooks";
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

  return (
    <div ref={menuRef} className="start-menu-container">
      <StartMenuHeader />
      <StartMenuItemsList icons={icons} onItemClick={handleItemClick} />
    </div>
  );
};