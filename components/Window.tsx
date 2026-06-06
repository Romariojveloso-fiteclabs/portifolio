import React from "react";
import { useWindowDrag } from "../hooks/useWindowDrag";
import type { WindowProps } from "../types";

const MOBILE_CONTAINER_CLASS = "fixed inset-0 flex flex-col bg-gray-200 dark:bg-gray-900";
const MOBILE_HEADER_CLASS = "flex items-center justify-between h-12 bg-gray-300 dark:bg-black/80 text-black dark:text-white px-2 select-none flex-shrink-0";
const CONTENT_CLASS = "flex-grow p-4 overflow-auto bg-white dark:bg-gray-800 text-black dark:text-gray-200";

const DESKTOP_CONTAINER_CLASS = "absolute flex flex-col bg-gray-200 dark:bg-gray-900 rounded-lg shadow-2xl border border-amber-600/40 resize overflow-hidden";
const DESKTOP_HEADER_CLASS = "flex items-center justify-between h-10 bg-gray-300 dark:bg-black/70 text-black dark:text-white px-2 cursor-move select-none";

export const Window: React.FC<WindowProps> = ({
  title,
  children,
  initialPosition,
  initialSize,
  zIndex,
  onClose,
  onFocus,
  onMinimize,
  isMobile,
}) => {
  const {
    position,
    size,
    isMaximized,
    handleMouseDown,
    toggleMaximize,
  } = useWindowDrag({
    initialPosition,
    initialSize,
    isMobile,
    onFocus,
  });

  if (isMobile) {
    return (
      <div className={MOBILE_CONTAINER_CLASS} style={{ zIndex: 100 }}>
        <header className={MOBILE_HEADER_CLASS}>
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
        <div className={CONTENT_CLASS}>{children}</div>
      </div>
    );
  }

  const windowStyle: React.CSSProperties = isMaximized
    ? {
        top: 0,
        left: 0,
        width: "100vw",
        height: `calc(100vh - 48px)`,
        zIndex,
        transform: "none",
      }
    : {
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        zIndex,
        transform: "none",
      };

  return (
    <div
      className={`${DESKTOP_CONTAINER_CLASS} ${isMaximized ? "rounded-none" : ""}`}
      style={windowStyle}
      onMouseDown={onFocus}
    >
      <header
        className={DESKTOP_HEADER_CLASS}
        onMouseDown={handleMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <span className="text-base font-bold truncate text-amber-400">
          {title}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={onMinimize}
            className="window-control w-5 h-5 rounded-full bg-green-600 hover:bg-green-500 transition-colors"
            title="Minimize"
            aria-label="Minimize window"
          ></button>
          <button
            onClick={toggleMaximize}
            className="window-control w-5 h-5 rounded-full bg-amber-500 hover:bg-amber-400 transition-colors"
            title="Maximize"
            aria-label="Maximize window"
          ></button>
          <button
            onClick={onClose}
            className="window-control w-5 h-5 rounded-full bg-purple-700 hover:bg-purple-600 transition-colors"
            title="Close"
            aria-label="Close window"
          ></button>
        </div>
      </header>
      <div className={CONTENT_CLASS}>{children}</div>
    </div>
  );
};