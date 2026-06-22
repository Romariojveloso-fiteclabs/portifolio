import React from "react";
import { WindowControls } from "./WindowControls";

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
      {!isMaximized && (
        <>
          <div className="resizer resizer-n" onMouseDown={(e) => handleResizeStart(e, "n")} />
          <div className="resizer resizer-s" onMouseDown={(e) => handleResizeStart(e, "s")} />
          <div className="resizer resizer-e" onMouseDown={(e) => handleResizeStart(e, "e")} />
          <div className="resizer resizer-w" onMouseDown={(e) => handleResizeStart(e, "w")} />
          <div className="resizer resizer-nw" onMouseDown={(e) => handleResizeStart(e, "nw")} />
          <div className="resizer resizer-ne" onMouseDown={(e) => handleResizeStart(e, "ne")} />
          <div className="resizer resizer-sw" onMouseDown={(e) => handleResizeStart(e, "sw")} />
          <div className="resizer resizer-se" onMouseDown={(e) => handleResizeStart(e, "se")} />
        </>
      )}
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
