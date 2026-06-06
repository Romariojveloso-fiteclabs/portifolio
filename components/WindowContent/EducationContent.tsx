import React from "react";
import type { EducationItem } from "../../types";

interface EducationContentProps {
  content: { title: string; content: string };
  education: EducationItem[];
}

export const EducationContent: React.FC<EducationContentProps> = ({
  content,
  education,
}) => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">{content.title}</h2>
      <p className="mb-6">{content.content}</p>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="p-4 rounded-lg bg-gray-100 dark:bg-black/30 border border-gray-200 dark:border-gray-700/50"
          >
            <div className="flex justify-between items-baseline">
              <h3 className="text-lg font-semibold text-amber-600 dark:text-amber-400">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {edu.period}
              </p>
            </div>
            <p className="font-medium text-gray-700 dark:text-gray-300">
              {edu.institution}
            </p>
            {edu.description && (
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
