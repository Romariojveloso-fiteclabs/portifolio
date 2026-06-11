import type React from "react";

export enum Language {
  EN = "en",
  ES = "es",
  FR = "fr",
  PT = "pt",
}

export enum WindowType {
  ABOUT = "ABOUT",
  PROJECTS = "PROJECTS",
  CONTACT = "CONTACT",
  EXPERIENCE = "EXPERIENCE",
  EDUCATION = "EDUCATION",
  BLOG = "BLOG",
  WEB = "WEB",
}

export interface DesktopIconType {
  id: WindowType | "GITHUB" | "LINKEDIN" | "LATTES";
  // FIX: Changed type to support multilingual labels.
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  type: "window" | "link";
  url?: string;
}

export interface WindowInstance {
  id: string;
  type: WindowType;
  title: string;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  isMinimized: boolean;
  url?: string;
}

export interface Project {
  // FIX: Changed type to support multilingual titles.
  title: string;
  // FIX: Changed type to support multilingual descriptions.
  description: string;
  tech: string[];
  url: string;
}

export interface Experience {
  // FIX: Changed type to support multilingual roles.
  role: string;
  company: string;
  // FIX: Changed type to support multilingual periods.
  period: string;
  // FIX: Changed type to support multilingual descriptions.
  description: string;
}

export interface EducationItem {
  // FIX: Changed type to support multilingual degrees.
  degree: string;
  institution: string;
  period: string;
  // FIX: Changed type to support multilingual descriptions.
  description?: string;
}

export interface ContactItem {
  icon: React.ElementType;
  label: string;
  value: string;
  link: string;
}

export interface DesktopProps {
  icons: DesktopIconType[];
  openWindow: (type: WindowType) => void;
  windows: WindowInstance[];
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  isMobile: boolean;
}

export interface InstallerWizardProps {
  onFinish: () => void;
  isMobile: boolean;
}

export interface StartMenuProps {
  icons: DesktopIconType[];
  onOpen: (type: WindowType) => void;
  onClose: () => void;
}

export interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
  zIndex: number;
  onClose: () => void;
  onFocus: () => void;
  onMinimize: () => void;
  isMobile: boolean;
  isBlog?: boolean;
}

export interface TaskbarProps {
  onStartClick: () => void;
  isMobile: boolean;
  windows: WindowInstance[];
  onWindowTabClick: (id: string) => void;
  activeWindowId: string | null;
}

export interface UseWindowDragProps {
  initialPosition: { x: number; y: number };
  initialSize: { width: number; height: number };
  isMobile: boolean;
  onFocus: () => void;
}
