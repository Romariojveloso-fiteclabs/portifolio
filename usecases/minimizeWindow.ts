import type { WindowInstance } from "../types";

export const minimizeWindowUseCase = (
  windows: WindowInstance[],
  id: string,
): WindowInstance[] => {
  return windows.map((win) =>
    win.id === id ? { ...win, isMinimized: true } : win
  );
};
