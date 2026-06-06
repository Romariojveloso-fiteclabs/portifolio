import type { WindowInstance } from "../types";

export const closeWindowUseCase = (
  windows: WindowInstance[],
  id: string,
): WindowInstance[] => {
  return windows.filter((w) => w.id !== id);
};
