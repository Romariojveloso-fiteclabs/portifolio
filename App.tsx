import React, { useState, useMemo } from "react";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";
import { StartMenu } from "./components/StartMenu";
import { InstallerWizard } from "./components/InstallerWizard";
import { DesktopLayout } from "./components/Desktop/DesktopLayout";
import { DESKTOP_ICONS_CONFIG } from "./data/config";
import { useTranslations } from "./context/LanguageContext";
import { useWindowManager, useIsMobile, useAutoOpenBlog } from "./hooks";
import { WindowType } from "./types";

const App: React.FC = () => {
  const { translations } = useTranslations();
  const isMobile = useIsMobile();
  const [showInstaller, setShowInstaller] = useState(true);

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

  useAutoOpenBlog(isMobile, showInstaller, openWindow);

  const desktopIcons = useMemo(() => {
    return DESKTOP_ICONS_CONFIG.map((iconConfig) => ({
      ...iconConfig,
      label:
        translations.desktop_icons[
          iconConfig.id as keyof typeof translations.desktop_icons
        ],
    }));
  }, [translations]);

  const handleInstallerFinish = () => {
    setShowInstaller(false);
  };

  const isTaskbarVisible = !isMobile || windows.length === 0;

  return (
    <DesktopLayout>
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
    </DesktopLayout>
  );
};

export default App;
