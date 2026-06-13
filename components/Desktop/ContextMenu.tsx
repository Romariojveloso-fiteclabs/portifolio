import React from "react";
import { ContextMenuItem } from "./ContextMenuItem";
import { ContextMenuContainer } from "./ContextMenuContainer";
import { useTranslations } from "../../context/LanguageContext";

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
  onSortIcons: (criteria: "name" | "date") => void;
  onResetDesktop: () => void;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  x,
  y,
  onClose,
  onSortIcons,
  onResetDesktop,
}) => {
  const { translations } = useTranslations();

  const handleAction = (callback: () => void) => {
    callback();
    onClose();
  };

  const handleSortByName = () => {
    handleAction(() => onSortIcons("name"));
  };

  const handleSortByDate = () => {
    handleAction(() => onSortIcons("date"));
  };

  const handleReset = () => {
    handleAction(onResetDesktop);
  };

  return (
    <ContextMenuContainer x={x} y={y} onClose={onClose}>
      <ContextMenuItem
        label={translations.ui.context_menu.sort_name}
        onClick={handleSortByName}
      />
      <ContextMenuItem
        label={translations.ui.context_menu.sort_date}
        onClick={handleSortByDate}
      />
      <ContextMenuItem
        label={translations.ui.context_menu.reset}
        onClick={handleReset}
        borderTop
      />
    </ContextMenuContainer>
  );
};
