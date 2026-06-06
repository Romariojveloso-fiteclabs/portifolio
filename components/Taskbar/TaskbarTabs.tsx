import React from "react";
import type { WindowInstance } from "../../types";

interface TaskbarTabsProps {
  windows: WindowInstance[];
  activeWindowId: string | null;
  onWindowTabClick: (id: string) => void;
}

export const TaskbarTabs: React.FC<TaskbarTabsProps> = ({
  windows,
  activeWindowId,
  onWindowTabClick,
}) => {
  return (
    <div className="flex-grow flex items-center h-full gap-1 px-2 overflow-x-auto">
      {windows.map((win) => (
        <button
          key={win.id}
          onClick={() => onWindowTabClick(win.id)}
          className={`px-4 py-1 h-5/6 max-w-40 text-sm text-left truncate rounded-t-md transition-colors flex items-center
                    ${win.id === activeWindowId ? "bg-amber-700/80" : "bg-gray-800/60 hover:bg-gray-700/80"}
                    ${win.isMinimized ? "border-b-2 border-amber-400" : ""}
                  `}
          title={win.title}
        >
          {win.title}
        </button>
      ))}
    </div>
  );
};
