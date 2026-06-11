import React from "react";
import { useTranslations } from "../context/LanguageContext";
import { InstallerMobile } from "./InstallerWizard/InstallerMobile";
import { InstallerDesktop } from "./InstallerWizard/InstallerDesktop";
import { useInstallerLanguage } from "./InstallerWizard/useInstallerLanguage";
import { useInstallerStepper } from "./InstallerWizard/useInstallerStepper";
import type { InstallerWizardProps } from "../types";
import "./InstallerWizard/InstallerWizard.css";

export const InstallerWizard: React.FC<InstallerWizardProps> = ({
  onFinish,
  isMobile,
  isInstallable,
  install,
}) => {
  const { language, translations, toggleLanguage } = useTranslations();

  const { nextLanguage, langSwitchLabel, langSwitchText } = useInstallerLanguage(language);
  
  const {
    step,
    steps,
    currentStep,
    Icon,
    progress,
    isLastStep,
    handleNext,
    handleBack,
  } = useInstallerStepper(language, isMobile, translations, onFinish);

  return (
    <>
      {isMobile ? (
        <InstallerMobile
          toggleLanguage={toggleLanguage}
          langSwitchLabel={langSwitchLabel}
          langSwitchText={langSwitchText}
          onFinish={onFinish}
          Icon={Icon}
          currentStep={currentStep}
          progress={progress}
          steps={steps}
          step={step}
          handleNext={handleNext}
          isLastStep={isLastStep}
          translations={translations}
          isInstallable={isInstallable}
          install={install}
        />
      ) : (
        <InstallerDesktop
          translations={translations}
          toggleLanguage={toggleLanguage}
          langSwitchLabel={langSwitchLabel}
          nextLanguage={nextLanguage}
          onFinish={onFinish}
          Icon={Icon}
          currentStep={currentStep}
          progress={progress}
          handleBack={handleBack}
          step={step}
          handleNext={handleNext}
          isLastStep={isLastStep}
          isInstallable={isInstallable}
          install={install}
        />
      )}
    </>
  );
};
