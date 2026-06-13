import { useState, useEffect } from "react";

export const usePWAInstall = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [showInstallPopup, setShowInstallPopup] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const triggerInstallPopup = () => {
    if (installPrompt) {
      setShowInstallPopup(true);
    }
  };

  const confirmInstall = () => {
    if (installPrompt) {
      installPrompt.prompt();
      installPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("Usuário aceitou a instalação do RomaOS");
        }
        setInstallPrompt(null);
      });
    }
    setShowInstallPopup(false);
  };

  const cancelInstall = () => {
    setShowInstallPopup(false);
  };

  return {
    isInstallable: !!installPrompt,
    install: triggerInstallPopup,
    showInstallPopup,
    confirmInstall,
    cancelInstall,
  };
};
