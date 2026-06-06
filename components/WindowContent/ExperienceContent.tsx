import React from "react";
import type { Experience } from "../../types";

interface ExperienceContentProps {
  content: { title: string; content: string };
  experience: Experience[];
}

export const ExperienceContent: React.FC<ExperienceContentProps> = ({
  content,
  experience,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{content.title}</h2>
      <p className="mb-6">{content.content}</p>
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400">
                {exp.role}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {exp.period}
              </p>
            </div>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              {exp.company}
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
