import React from "react";

export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 dark:border-gray-700 px-3 py-1 text-xs sm:text-sm text-gray-700 dark:text-gray-200 bg-white/60 dark:bg-gray-900/40">
      {children}
    </span>
  );
}
