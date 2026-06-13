import React, { useState, useMemo } from "react";
import { Desktop } from "./components/Desktop";
import { Taskbar } from "./components/Taskbar";
import { StartMenu } from "./components/StartMenu";
import { InstallerWizard } from "./components/InstallerWizard";
import { DesktopLayout } from "./components/Desktop/DesktopLayout";
import { PWAInstallPopup } from "./components/Desktop/PWAInstallPopup";
import { DESKTOP_ICONS_CONFIG } from "./data/config";
import { useTranslations } from "./context/LanguageContext";
import { useWindowManager, useIsMobile, useAutoOpenBlog, usePWAInstall, useDesktopIcons } from "./hooks";
import { WindowType } from "./types";

const App: React.FC = () => {
  const { translations } = useTranslations();
  const isMobile = useIsMobile();
  const [showInstaller, setShowInstaller] = useState(true);
  const {
    isInstallable,
    install,
    showInstallPopup,
    confirmInstall,
    cancelInstall,
  } = usePWAInstall();

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

  const {
    icons: desktopIcons,
    onSortIcons,
    onResetDesktop,
    onUpdateIconPosition,
  } = useDesktopIcons(isMobile, translations);

  useAutoOpenBlog(isMobile, showInstaller, openWindow);

  const handleInstallerFinish = () => {
    setShowInstaller(false);
  };

  const isTaskbarVisible = !isMobile || windows.length === 0;

  return (
    <DesktopLayout>
      {showInstaller && (
        <InstallerWizard 
          onFinish={handleInstallerFinish} 
          isMobile={isMobile} 
          isInstallable={isInstallable}
          install={install}
        />
      )}
      <Desktop
        icons={desktopIcons}
        openWindow={openWindow}
        windows={windows}
        closeWindow={closeWindow}
        focusWindow={focusWindow}
        minimizeWindow={minimizeWindow}
        isMobile={isMobile}
        onSortIcons={onSortIcons}
        onResetDesktop={onResetDesktop}
        onUpdateIconPosition={onUpdateIconPosition}
      />
      {!isMobile && isStartMenuOpen && (
        <StartMenu
          icons={desktopIcons.filter((icon) => icon.type === "window")}
          onOpen={openWindow}
          onClose={() => setIsStartMenuOpen(false)}
          isInstallable={isInstallable}
          install={install}
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
      {showInstallPopup && (
        <PWAInstallPopup onConfirm={confirmInstall} onCancel={cancelInstall} />
      )}
    </DesktopLayout>
  );
};

export default App;
