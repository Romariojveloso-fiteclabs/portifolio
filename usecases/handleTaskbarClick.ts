import { focusWindowUseCase } from "./focusWindow";
import { minimizeWindowUseCase } from "./minimizeWindow";
import type { WindowInstance } from "../types";

export const handleTaskbarClickUseCase = (
  windows: WindowInstance[],
  id: string,
  activeWindowId: string | null,
  nextZIndex: number,
): {
  updatedWindows: WindowInstance[];
  nextZIndex: number;
} => {
  const win = windows.find((w) => w.id === id);
  if (!win) {
    return { updatedWindows: windows, nextZIndex };
  }

  if (win.isMinimized) {
    return focusWindowUseCase(windows, id, nextZIndex);
  }

  if (win.id === activeWindowId) {
    const updated = minimizeWindowUseCase(windows, id);
    return { updatedWindows: updated, nextZIndex };
  }

  return focusWindowUseCase(windows, id, nextZIndex);
};
