import React from "react";
import { InstallerMobileHeader } from "./InstallerMobileHeader";
import { InstallerMobileContent } from "./InstallerMobileContent";
import { InstallerMobileFooter } from "./InstallerMobileFooter";

interface InstallerMobileProps {
  toggleLanguage: () => void;
  langSwitchLabel: string;
  langSwitchText: string;
  onFinish: () => void;
  Icon: React.FC<{ className?: string }> | null;
  currentStep: { title: string; description: string };
  progress: number;
  steps: any[];
  step: number;
  handleNext: () => void;
  isLastStep: boolean;
  translations: any;
  isInstallable?: boolean;
  install?: () => void;
}

export const InstallerMobile: React.FC<InstallerMobileProps> = ({
  toggleLanguage,
  langSwitchLabel,
  langSwitchText,
  onFinish,
  Icon,
  currentStep,
  progress,
  steps,
  step,
  handleNext,
  isLastStep,
  translations,
  isInstallable,
  install,
}) => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex flex-col p-4 animate-fade-in text-white text-center">
      <InstallerMobileHeader
        toggleLanguage={toggleLanguage}
        langSwitchLabel={langSwitchLabel}
        langSwitchText={langSwitchText}
        onFinish={onFinish}
      />
      <InstallerMobileContent
        Icon={Icon}
        currentStep={currentStep}
      />
      <InstallerMobileFooter
        progress={progress}
        steps={steps}
        step={step}
        isLastStep={isLastStep}
        isInstallable={isInstallable}
        install={install}
        handleNext={handleNext}
        translations={translations}
      />
    </div>
  );
};
