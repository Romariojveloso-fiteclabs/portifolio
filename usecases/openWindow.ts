import { focusWindowUseCase } from "./focusWindow";
import type { WindowInstance, WindowType } from "../types";

export const openWindowUseCase = (
  windows: WindowInstance[],
  type: WindowType,
  title: string,
  nextZIndex: number,
): {
  updatedWindows: WindowInstance[];
  nextZIndex: number;
  isStartMenuOpen: boolean;
} => {
  const existingWindow = windows.find((w) => w.type === type);

  if (existingWindow) {
    const { updatedWindows, nextZIndex: updatedZIndex } = focusWindowUseCase(
      windows,
      existingWindow.id,
      nextZIndex,
    );
    return {
      updatedWindows,
      nextZIndex: updatedZIndex,
      isStartMenuOpen: false,
    };
  }

  const newId = `${type}-${Date.now()}`;
  const newWindow: WindowInstance = {
    id: newId,
    type,
    title,
    position: {
      x: 150 + windows.length * 20,
      y: 100 + windows.length * 20,
    },
    size: { width: 600, height: 400 },
    zIndex: nextZIndex,
    isMinimized: false,
  };

  return {
    updatedWindows: [...windows, newWindow],
    nextZIndex: nextZIndex + 1,
    isStartMenuOpen: false,
  };
};
