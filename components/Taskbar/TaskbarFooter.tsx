import React from "react";
import { useTranslations } from "../../context/LanguageContext";
import { useFormattedTime } from "../../hooks/useFormattedTime";
import { TaskbarStartButton } from "./TaskbarStartButton";
import { TaskbarTabs } from "./TaskbarTabs";
import { TaskbarClock } from "./TaskbarClock";
import type { TaskbarProps } from "../../types";
import "./Taskbar.css";

export const TaskbarFooter: React.FC<TaskbarProps> = ({
  onStartClick,
  isMobile,
  windows,
  onWindowTabClick,
  activeWindowId,
}) => {
  const { language, translations, toggleLanguage } = useTranslations();
  const formattedTime = useFormattedTime(language);

  return (
    <footer className="taskbar-container">
      {!isMobile && (
        <TaskbarStartButton
          onClick={onStartClick}
          label={translations.ui.start}
        />
      )}

      {!isMobile && (
        <TaskbarTabs
          windows={windows}
          activeWindowId={activeWindowId}
          onWindowTabClick={onWindowTabClick}
        />
      )}

      {isMobile && <div className="flex-grow"></div>}

      <TaskbarClock
        toggleLanguage={toggleLanguage}
        language={language}
        formattedTime={formattedTime}
      />
    </footer>
  );
};
