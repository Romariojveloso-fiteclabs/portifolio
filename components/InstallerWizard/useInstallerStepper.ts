import { useState, useMemo, useCallback } from "react";
import { Language } from "../../types";
import { useInstallerSteps } from "./useInstallerSteps";

export const useInstallerStepper = (
  language: Language,
  isMobile: boolean,
  translations: any,
  onFinish: () => void,
) => {
  const [step, setStep] = useState(0);

  const steps = useInstallerSteps(language, isMobile, translations);

  const currentStep = steps[step];
  const Icon = currentStep.Icon;

  const progress = useMemo(
    () => ((step + 1) / steps.length) * 100,
    [step, steps.length],
  );

  const isLastStep = step === steps.length - 1;

  const handleNext = useCallback(() => {
    if (step < steps.length - 1) {
      setStep((s) => s + 1);
    } else {
      onFinish();
    }
  }, [step, steps.length, onFinish]);

  const handleBack = useCallback(() => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  }, [step]);

  return {
    step,
    steps,
    currentStep,
    Icon,
    progress,
    isLastStep,
    handleNext,
    handleBack,
  };
};
