import type { WindowInstance } from "../types";

export const getActiveWindowIdUseCase = (
  windows: WindowInstance[],
): string | null => {
  const visibleWindows = windows.filter((w) => !w.isMinimized);
  if (visibleWindows.length === 0) return null;

  let topWindow = visibleWindows[0];
  for (let i = 1; i < visibleWindows.length; i++) {
    if (visibleWindows[i].zIndex > topWindow.zIndex) {
      topWindow = visibleWindows[i];
    }
  }
  return topWindow.id;
};
