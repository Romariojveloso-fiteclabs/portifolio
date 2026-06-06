import { useMemo } from "react";
import { DESKTOP_ICONS_CONFIG } from "../../data/config";
import { Language, WindowType } from "../../types";
import { AboutIcon } from "../icons/Icons";

export const useInstallerSteps = (
  language: Language,
  isMobile: boolean,
  translations: any,
) => {
  return useMemo(() => {
    const findIcon = (id: WindowType | "GITHUB" | "LINKEDIN" | "LATTES") => {
      return DESKTOP_ICONS_CONFIG.find((icon) => icon.id === id)!.icon;
    };

    const verb = isMobile
      ? language === Language.PT
        ? "Toque"
        : language === Language.FR
          ? "Touchez"
          : language === Language.ES
            ? "Toca"
            : "Tap"
      : language === Language.PT
        ? "Clique"
        : language === Language.FR
          ? "Cliquez"
          : language === Language.ES
            ? "Haz clic"
            : "Click";

    return [
      {
        title: translations.ui.installer.welcome_title,
        description: translations.ui.installer.welcome_description,
        Icon: AboutIcon,
      },
      {
        title: translations.desktop_icons.ABOUT,
        description: translations.ui.installer.about_description(verb),
        Icon: findIcon(WindowType.ABOUT),
      },
      {
        title: translations.desktop_icons.PROJECTS,
        description: translations.ui.installer.projects_description,
        Icon: findIcon(WindowType.PROJECTS),
      },
      {
        title: translations.ui.installer.experience_education_title(
          translations.desktop_icons.EXPERIENCE,
          translations.desktop_icons.EDUCATION,
        ),
        description: translations.ui.installer.experience_education_description,
        Icon: findIcon(WindowType.EXPERIENCE),
      },
      {
        title: translations.ui.installer.links_title,
        description: translations.ui.installer.links_description,
        Icon: findIcon("GITHUB"),
      },
      {
        title: translations.desktop_icons.CONTACT,
        description: translations.ui.installer.contact_description(verb),
        Icon: findIcon(WindowType.CONTACT),
      },
      {
        title: translations.ui.installer.all_set_title,
        description: translations.ui.installer.all_set_description(verb),
        Icon: null,
      },
    ];
  }, [language, isMobile, translations]);
};
