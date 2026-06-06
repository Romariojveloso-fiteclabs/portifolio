import React from "react";

interface TaskbarClockProps {
  toggleLanguage: () => void;
  language: string;
  formattedTime: string;
}

export const TaskbarClock: React.FC<TaskbarClockProps> = ({
  toggleLanguage,
  language,
  formattedTime,
}) => {
  return (
    <div className="flex items-center h-full flex-shrink-0">
      <button
        onClick={toggleLanguage}
        className="h-full px-3 text-sm font-semibold bg-gray-900 hover:bg-amber-800/60 transition-colors"
      >
        {language.toUpperCase()}
      </button>
      <div className="h-full px-3 bg-black/50 flex items-center text-sm">
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};
