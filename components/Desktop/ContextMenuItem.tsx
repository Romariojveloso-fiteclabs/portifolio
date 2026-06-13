import React from "react";

interface ContextMenuItemProps {
  label: string;
  onClick: () => void;
  borderTop?: boolean;
}

export const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  label,
  onClick,
  borderTop = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 hover:bg-amber-500/20 hover:text-white cursor-pointer text-left text-sm transition-colors duration-100 w-full ${
        borderTop ? "border-t border-neutral-900" : ""
      }`}
    >
      {label}
    </button>
  );
};
