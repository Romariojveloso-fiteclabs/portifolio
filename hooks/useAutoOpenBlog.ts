import { useState, useEffect } from "react";
import { WindowType } from "../types";

export const useAutoOpenBlog = (
  isMobile: boolean,
  showInstaller: boolean,
  openWindow: (type: WindowType) => void
): void => {
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (!isMobile && !hasAutoOpened && !showInstaller) {
      openWindow(WindowType.BLOG);
      setHasAutoOpened(true);
    }
  }, [isMobile, hasAutoOpened, showInstaller, openWindow]);
};
