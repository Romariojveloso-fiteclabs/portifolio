import React from "react";

interface DesktopIconProps {
  id?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  onClick: () => void;
  isMobile?: boolean;
}

export const DesktopIcon: React.FC<DesktopIconProps> = ({
  id,
  icon: Icon,
  label,
  onClick,
  isMobile,
}) => {
  const isBlog = id === "BLOG";
  const showBadge = isBlog && isMobile;

  return (
    <div
      className="flex flex-col items-center justify-center text-center p-2 rounded hover:bg-amber-500/20 focus:bg-amber-500/30 cursor-pointer w-32 h-32 transition-all duration-150 relative group"
      onClick={onClick}
      tabIndex={0}
    >
      <div className="relative">
        <Icon
          className={`w-16 h-16 transition-all duration-200 ${
            isBlog
              ? "text-amber-500 drop-shadow-lg scale-105 filter saturate-200"
              : "text-gray-100 drop-shadow-lg"
          }`}
        />
        {showBadge && (
          <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-[11px] font-extrabold text-white shadow-lg ring-2 ring-black animate-bounce">
            1
          </span>
        )}
      </div>
      <span
        className={`text-base mt-2 select-none drop-shadow-md transition-colors duration-150 ${
          isBlog
            ? "text-amber-300 font-semibold group-hover:text-amber-200"
            : "text-gray-200 group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
