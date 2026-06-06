import type { WindowInstance } from "../types";

export const focusWindowUseCase = (
  windows: WindowInstance[],
  id: string,
  nextZIndex: number,
): {
  updatedWindows: WindowInstance[];
  nextZIndex: number;
} => {
  const updatedWindows = windows.map((w) =>
    w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
  );
  return {
    updatedWindows,
    nextZIndex: nextZIndex + 1,
  };
};
