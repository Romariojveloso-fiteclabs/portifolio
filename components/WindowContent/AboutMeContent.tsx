import React from "react";

export const AboutMeContent: React.FC<{ content: string }> = ({ content }) => {
  return <p className="whitespace-pre-wrap leading-relaxed">{content}</p>;
};
