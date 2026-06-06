import { useCallback } from "react";
import type { DesktopIconType, WindowType } from "../../types";

export const useStartMenu = (
  onOpen: (type: WindowType) => void,
  onClose: () => void,
) => {
  const handleItemClick = useCallback(
    (item: DesktopIconType) => {
      if (item.type === "window") {
        onOpen(item.id as WindowType);
      } else if (item.type === "link" && item.url) {
        window.open(item.url, "_blank", "noopener,noreferrer");
        onClose();
      }
    },
    [onOpen, onClose],
  );

  return { handleItemClick };
};
