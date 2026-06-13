import React from "react";

interface DesktopIconVisualProps {
  icon: React.ComponentType<{ className?: string }>;
  isBlog: boolean;
  showBadge: boolean;
}

export const DesktopIconVisual: React.FC<DesktopIconVisualProps> = ({
  icon: Icon,
  isBlog,
  showBadge,
}) => {
  return (
    <div className="relative">
      <Icon
        className={`w-14 h-14 transition-all duration-200 ${
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
  );
};
