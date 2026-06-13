import React from "react";
import { Window } from "../Window";
import {
  AboutMeContent,
  ProjectsContent,
  ContactContent,
  ExperienceContent,
  EducationContent,
  BlogContent,
} from "../WindowContent/index";
import type { WindowInstance, WindowType } from "../../types";
import { useTranslations } from "../../context/LanguageContext";

interface DesktopWindowsProps {
  windows: WindowInstance[];
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  isMobile: boolean;
}

export const DesktopWindows: React.FC<DesktopWindowsProps> = ({
  windows,
  closeWindow,
  focusWindow,
  minimizeWindow,
  isMobile,
}) => {
  const { translations } = useTranslations();

  const renderWindowContent = (win: WindowInstance) => {
    switch (win.type) {
      case "ABOUT":
        return <AboutMeContent content={translations.windows.ABOUT.content} />;
      case "PROJECTS":
        return (
          <ProjectsContent
            content={translations.windows.PROJECTS}
            projects={translations.projects}
            ui={translations.ui}
          />
        );
      case "CONTACT":
        return <ContactContent content={translations.windows.CONTACT} />;
      case "EXPERIENCE":
        return (
          <ExperienceContent
            content={translations.windows.EXPERIENCE}
            experience={translations.experience}
          />
        );
      case "EDUCATION":
        return (
          <EducationContent
            content={translations.windows.EDUCATION}
            education={translations.education}
          />
        );
      case "BLOG":
        return <BlogContent />;
      default:
        return null;
    }
  };

  return (
    <>
      {windows
        .filter((w) => !w.isMinimized)
        .map((win) => (
          <Window
            key={win.id}
            id={win.id}
            title={win.title}
            initialPosition={win.position}
            initialSize={win.size}
            zIndex={win.zIndex}
            onClose={() => closeWindow(win.id)}
            onFocus={() => focusWindow(win.id)}
            onMinimize={() => minimizeWindow(win.id)}
            isMobile={isMobile}
            isBlog={win.type === "BLOG"}
          >
            {renderWindowContent(win)}
          </Window>
        ))}
    </>
  );
};
