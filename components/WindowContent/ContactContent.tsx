import React from "react";
import type { ContactItem } from "../../types";

interface ContactContentProps {
  content: {
    title: string;
    content: string;
    contactItems: ContactItem[];
    footer: string;
  };
}

export const ContactContent: React.FC<ContactContentProps> = ({ content }) => {
  return (
    <div className="space-y-6">
      <p className="leading-relaxed">{content.content}</p>

      <div className="space-y-4">
        {content.contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="flex items-center gap-3 p-3 rounded-lg bg-gray-100 dark:bg-black/30 
                      border border-gray-200 dark:border-gray-700/50 
                      hover:bg-gray-200 dark:hover:bg-gray-800/50 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <item.icon className="text-xl text-amber-600 dark:text-amber-400" />
            <div>
              <div className="font-medium text-amber-600 dark:text-amber-400">
                {item.label}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {item.value}
              </div>
            </div>
          </a>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
        {content.footer}
      </p>
    </div>
  );
};
