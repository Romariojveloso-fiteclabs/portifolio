import { useState, useCallback, useEffect, useMemo } from "react";
import { WindowType, WindowInstance } from "../types";
import { useTranslations } from "../context/LanguageContext";

export const useWindowManager = () => {
  const { translations } = useTranslations();
  const [windows, setWindows] = useState<WindowInstance[]>([]);
  const [nextZIndex, setNextZIndex] = useState(10);
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);

  const activeWindowId = useMemo(() => {
    const visibleWindows = windows.filter((w) => !w.isMinimized);
    if (visibleWindows.length === 0) return null;

    let topWindow = visibleWindows[0];
    for (let i = 1; i < visibleWindows.length; i++) {
      if (visibleWindows[i].zIndex > topWindow.zIndex) {
        topWindow = visibleWindows[i];
      }
    }
    return topWindow.id;
  }, [windows]);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, zIndex: nextZIndex, isMinimized: false } : w
      )
    );
    setNextZIndex((prev) => prev + 1);
  }, [nextZIndex]);

  const openWindow = useCallback(
    (type: WindowType) => {
      const existingWindow = windows.find((w) => w.type === type);

      if (existingWindow) {
        focusWindow(existingWindow.id);
        return;
      }

      const newId = `${type}-${Date.now()}`;
      const newWindow: WindowInstance = {
        id: newId,
        type: type,
        title: translations.windows[type].title,
        position: {
          x: 150 + windows.length * 20,
          y: 100 + windows.length * 20,
        },
        size: { width: 600, height: 400 },
        zIndex: nextZIndex,
        isMinimized: false,
      };
      setWindows((prev) => [...prev, newWindow]);
      setNextZIndex((prev) => prev + 1);
      setIsStartMenuOpen(false);
    },
    [windows, nextZIndex, translations, focusWindow]
  );

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((win) => (win.id === id ? { ...win, isMinimized: true } : win))
    );
  }, []);

  const handleTaskbarClick = useCallback((id: string) => {
    const win = windows.find((w) => w.id === id);
    if (!win) return;

    if (win.isMinimized) {
      focusWindow(id);
    } else if (win.id === activeWindowId) {
      minimizeWindow(id);
    } else {
      focusWindow(id);
    }
  }, [windows, activeWindowId, focusWindow, minimizeWindow]);

  const updateWindowTitle = useCallback((id: string, newTitle: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, title: newTitle } : w))
    );
  }, []);

  useEffect(() => {
    windows.forEach((win) => {
      const newTitle = translations.windows[win.type].title;
      if (win.title !== newTitle) {
        updateWindowTitle(win.id, newTitle);
      }
    });
  }, [translations, windows, updateWindowTitle]);

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
