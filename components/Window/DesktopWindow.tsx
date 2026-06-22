import React from "react";
import { WindowControls } from "./WindowControls";
import { WindowResizer } from "./WindowResizer";

interface DesktopWindowProps {
  title: string;
  children: React.ReactNode;
  windowStyle: React.CSSProperties;
  isMaximized: boolean;
  onFocus: () => void;
  handleMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
  toggleMaximize: () => void;
  onMinimize: () => void;
  onClose: () => void;
  isBlog?: boolean;
  handleResizeStart: (e: React.MouseEvent<HTMLDivElement>, direction: string) => void;
}

export const DesktopWindow: React.FC<DesktopWindowProps> = ({
  title,
  children,
  windowStyle,
  isMaximized,
  onFocus,
  handleMouseDown,
  toggleMaximize,
  onMinimize,
  onClose,
  isBlog,
  handleResizeStart,
}) => {
  return (
    <div
      className={`desktop-window-container ${isMaximized ? "maximized" : ""}`}
      style={windowStyle}
      onMouseDown={onFocus}
    >
      {!isMaximized && <WindowResizer handleResizeStart={handleResizeStart} />}
      <header
        className="desktop-window-header"
        onMouseDown={handleMouseDown}
        onDoubleClick={toggleMaximize}
      >
        <span className="text-base font-bold truncate text-amber-400">
          {title}
        </span>
        <WindowControls
          onMinimize={onMinimize}
          onMaximize={toggleMaximize}
          onClose={onClose}
        />
      </header>
      <div className={`window-content-area ${isBlog ? "blog-window" : ""}`}>{children}</div>
    </div>
  );
};
