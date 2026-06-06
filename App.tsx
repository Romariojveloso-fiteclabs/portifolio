import React, { useState, useEffect, useMemo } from "react";
import robotImg from "./ME-ROBOT.png";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";
import { StartMenu } from "./components/StartMenu";
import { InstallerWizard } from "./components/InstallerWizard";
import { DESKTOP_ICONS_CONFIG } from "./data/config";
import { useTranslations } from "./context/LanguageContext";
import { useWindowManager } from "./hooks/useWindowManager";

const App: React.FC = () => {
  const { translations } = useTranslations();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
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

  const handleInstallerFinish = () => {
    setShowInstaller(false);
  };

  const isTaskbarVisible = !isMobile || windows.length === 0;

  return (
    <div
      className="w-screen h-screen bg-black bg-no-repeat bg-center bg-cover sm:bg-right sm:bg-[length:auto_110vh] font-sans overflow-hidden"
      style={{ backgroundImage: `url(${robotImg})` }}
    >
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
