import { useCallback } from "react";
import type { DesktopIconType, WindowType } from "../../types";
import { trackEvent } from "../../utils/analytics";

export const useStartMenu = (
  onOpen: (type: WindowType) => void,
  onClose: () => void,
) => {
  const handleItemClick = useCallback(
    (item: DesktopIconType) => {
      if (item.type === "window") {
        onOpen(item.id as WindowType);
      } else if (item.type === "link" && item.url) {
        trackEvent("click_external_link", "Outbound Link", item.label);
        window.open(item.url, "_blank", "noopener,noreferrer");
        onClose();
      }
    },
    [onOpen, onClose],
  );

  return { handleItemClick };
};
