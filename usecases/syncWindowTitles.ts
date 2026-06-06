import type { WindowInstance, WindowType } from "../types";

export const syncWindowTitlesUseCase = (
  windows: WindowInstance[],
  titlesMap: Record<WindowType, { title: string }>,
): {
  updatedWindows: WindowInstance[];
  hasChanges: boolean;
} => {
  let hasChanges = false;
  const updatedWindows = windows.map((win) => {
    const newTitle = titlesMap[win.type]?.title;
    if (newTitle && win.title !== newTitle) {
      hasChanges = true;
      return { ...win, title: newTitle };
    }
    return win;
  });

  return { updatedWindows, hasChanges };
};
