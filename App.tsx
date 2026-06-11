import React, { useState, useEffect, useMemo } from "react";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";
import { StartMenu } from "./components/StartMenu";
import { InstallerWizard } from "./components/InstallerWizard";
import { DESKTOP_ICONS_CONFIG } from "./data/config";
import { useTranslations } from "./context/LanguageContext";
import { useWindowManager } from "./hooks";
import { WindowType } from "./types";

const App: React.FC = () => {
  const { translations } = useTranslations();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showInstaller, setShowInstaller] = useState(true);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const {
    windows,
    isStartMenuOpen,
    activeWindowId,
    setIsStartMenuOpen,
    openWindow,
    closeWindow,
    minimizeWindow,
    focusWindow,
    handleTaskbarClick,
  } = useWindowManager();

  const desktopIcons = useMemo(() => {
    return DESKTOP_ICONS_CONFIG.map((iconConfig) => ({
      ...iconConfig,
      label:
        translations.desktop_icons[
          iconConfig.id as keyof typeof translations.desktop_icons
        ],
    }));
  }, [translations]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && !hasAutoOpened && !showInstaller) {
      openWindow(WindowType.BLOG);
      setHasAutoOpened(true);
    }
  }, [isMobile, hasAutoOpened, showInstaller, openWindow]);

  const handleInstallerFinish = () => {
    setShowInstaller(false);
  };

  const isTaskbarVisible = !isMobile || windows.length === 0;

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1920&h=1080&auto=format&fit=crop')] font-sans overflow-hidden">
      {showInstaller && (
        <InstallerWizard onFinish={handleInstallerFinish} isMobile={isMobile} />
      )}
      <Desktop
        icons={desktopIcons}
        openWindow={openWindow}
        windows={windows}
        closeWindow={closeWindow}
        focusWindow={focusWindow}
        minimizeWindow={minimizeWindow}
        isMobile={isMobile}
      />
      {!isMobile && isStartMenuOpen && (
        <StartMenu
          icons={desktopIcons}
          onOpen={openWindow}
          onClose={() => setIsStartMenuOpen(false)}
        />
      )}
      {isTaskbarVisible && (
        <Taskbar
          onStartClick={() => setIsStartMenuOpen((prev) => !prev)}
          windows={windows}
          onWindowTabClick={handleTaskbarClick}
          activeWindowId={activeWindowId}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export default App;
