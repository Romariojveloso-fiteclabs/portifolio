import React from "react";
import type { Project } from "../../types";
import type { Translations } from "../../locales/pt/index";

interface ProjectsContentProps {
  content: { title: string; content: string };
  projects: Project[];
  ui: Translations["ui"];
}

export const ProjectsContent: React.FC<ProjectsContentProps> = ({
  content,
  projects,
  ui,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{content.title}</h2>
      <p className="mb-6">{content.content}</p>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400">
                {project.title}
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-green-400 hover:text-green-300 hover:underline"
              >
                {ui.view_source} &rarr;
              </a>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-green-200 text-green-900 rounded-full dark:bg-green-900/70 dark:text-green-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
