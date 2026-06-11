import React from "react";

export const BlogContent: React.FC = () => {
  return (
    <div className="w-full h-full bg-slate-950 relative flex flex-col">
      <iframe
        src="/blog/index.html"
        className="w-full h-full border-none flex-grow"
        title="Astro Blog"
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
};
