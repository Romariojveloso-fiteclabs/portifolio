import React from "react";

interface DesktopIconLabelProps {
  label: string;
  isBlog: boolean;
}

export const DesktopIconLabel: React.FC<DesktopIconLabelProps> = ({
  label,
  isBlog,
}) => {
  return (
    <span
      className={`text-xs mt-2 select-none drop-shadow-md transition-colors duration-150 break-words w-full truncate px-1 ${
        isBlog
          ? "text-amber-300 font-semibold group-hover:text-amber-200"
          : "text-gray-200 group-hover:text-white"
      }`}
    >
      {label}
    </span>
  );
};
