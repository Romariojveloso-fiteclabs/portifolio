import React from "react";
import { useWindowDrag } from "../hooks";
import { useWindowStyle } from "./Window/useWindowStyle";
import { MobileWindow } from "./Window/MobileWindow";
import { DesktopWindow } from "./Window/DesktopWindow";
import type { WindowProps } from "../types";
import "./Window/Window.css";

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
  isBlog = false,
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

  const windowStyle = useWindowStyle(isMaximized, position, size, zIndex);

  if (isMobile) {
    return (
      <MobileWindow title={title} onClose={onClose} isBlog={isBlog}>
        {children}
      </MobileWindow>
    );
  }

  return (
    <DesktopWindow
      title={title}
      windowStyle={windowStyle}
      isMaximized={isMaximized}
      onFocus={onFocus}
      handleMouseDown={handleMouseDown}
      toggleMaximize={toggleMaximize}
      onMinimize={onMinimize}
      onClose={onClose}
      isBlog={isBlog}
    >
      {children}
    </DesktopWindow>
  );
};