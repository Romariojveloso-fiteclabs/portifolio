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
          className={`px-4 py-1 h-full max-w-40 text-sm text-left truncate transition-colors flex items-center border-t-2
                    ${
                      win.id === activeWindowId
                        ? "bg-black/90 text-amber-400 font-bold border-amber-500"
                        : "bg-gray-900/60 hover:bg-gray-800/80 text-gray-300 border-transparent"
                    }
                    ${win.isMinimized ? "opacity-60 border-b-2 border-amber-500/50" : ""}
                  `}
          title={win.title}
        >
          {win.title}
        </button>
      ))}
    </div>
  );
};
