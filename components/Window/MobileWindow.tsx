import React from "react";

interface MobileWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  isBlog?: boolean;
}

export const MobileWindow: React.FC<MobileWindowProps> = ({
  title,
  onClose,
  children,
  isBlog,
}) => {
  return (
    <div className="mobile-window-container">
      <header className="mobile-window-header">
        <span className="text-base font-bold truncate text-amber-400">
          {title}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={onClose}
            className="window-control w-8 h-8 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors flex items-center justify-center text-white font-bold"
            title="Close"
            aria-label="Close window"
          >
            &times;
          </button>
        </div>
      </header>
      <div className={`window-content-area ${isBlog ? "blog-window" : ""}`}>{children}</div>
    </div>
  );
};
