import { useState, useCallback, useEffect, useMemo } from "react";
import { WindowType, WindowInstance } from "../types";
import { useTranslations } from "../context/LanguageContext";
import {
  focusWindowUseCase,
  minimizeWindowUseCase,
  openWindowUseCase,
  closeWindowUseCase,
  getActiveWindowIdUseCase,
  syncWindowTitlesUseCase,
  handleTaskbarClickUseCase,
} from "../usecases";
import { trackPageView } from "../utils/analytics";

export const useWindowManager = () => {
  const { translations } = useTranslations();
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const activeWindowId = useMemo(() => {
    return getActiveWindowIdUseCase(windows);
  }, [windows]);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const { updatedWindows } = focusWindowUseCase(prev, id, nextZIndex);
      return updatedWindows;
    });
    setNextZIndex((prev) => prev + 1);
  }, [nextZIndex]);

  const openWindow = useCallback(
    (type: WindowType) => {
      const title = translations.windows[type].title;
      const { updatedWindows, nextZIndex: nextZ, isStartMenuOpen: startMenuState } = openWindowUseCase(
        windows,
        type,
        title,
        nextZIndex,
      );
      setWindows(updatedWindows);
      setNextZIndex(nextZ);
      setIsStartMenuOpen(startMenuState);
      trackPageView(`/${type.toLowerCase()}`, title);
    },
    [windows, nextZIndex, translations]
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => closeWindowUseCase(prev, id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => minimizeWindowUseCase(prev, id));
  }, []);

  const handleTaskbarClick = useCallback((id: string) => {
    const { updatedWindows, nextZIndex: nextZ } = handleTaskbarClickUseCase(
      windows,
      id,
      activeWindowId,
      nextZIndex,
    );
    setWindows(updatedWindows);
    setNextZIndex(nextZ);
  }, [windows, activeWindowId, nextZIndex]);

  useEffect(() => {
    const { updatedWindows, hasChanges } = syncWindowTitlesUseCase(
      windows,
      translations.windows,
    );
    if (hasChanges) {
      setWindows(updatedWindows);
    }
  }, [translations, windows]);

  return {
    windows,
    isStartMenuOpen,
    activeWindowId,
    setIsStartMenuOpen,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    handleTaskbarClick,
  };
};
