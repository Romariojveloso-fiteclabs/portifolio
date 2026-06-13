import React from "react";
import { InstallerDesktopHeader } from "./InstallerDesktopHeader";
import { InstallerDesktopContent } from "./InstallerDesktopContent";
import { InstallerDesktopFooter } from "./InstallerDesktopFooter";

interface InstallerDesktopProps {
  translations: any;
  toggleLanguage: () => void;
  langSwitchLabel: string;
  nextLanguage: string;
  onFinish: () => void;
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
  progress: number;
  handleBack: () => void;
  step: number;
  handleNext: () => void;
  isLastStep: boolean;
  isInstallable?: boolean;
  install?: () => void;
}

export const InstallerDesktop: React.FC<InstallerDesktopProps> = ({
  translations,
  toggleLanguage,
  langSwitchLabel,
  nextLanguage,
  onFinish,
  Icon,
  currentStep,
  progress,
  handleBack,
  step,
  handleNext,
  isLastStep,
  isInstallable,
  install,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="w-full max-w-lg bg-gray-900/95 text-white rounded-lg shadow-2xl border border-amber-600/50 flex flex-col overflow-hidden">
        <InstallerDesktopHeader
          translations={translations}
          toggleLanguage={toggleLanguage}
          langSwitchLabel={langSwitchLabel}
          nextLanguage={nextLanguage}
          onFinish={onFinish}
        />
        <InstallerDesktopContent
          Icon={Icon}
          currentStep={currentStep}
        />
        <InstallerDesktopFooter
          translations={translations}
          progress={progress}
          isLastStep={isLastStep}
          isInstallable={isInstallable}
          install={install}
          handleBack={handleBack}
          step={step}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};
