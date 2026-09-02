"use client";

import type { ReactNode } from "react";
import { useViewStore, type ViewMode } from "@/store/useViewStore";

const viewOptions: { mode: ViewMode; icon: ReactNode; label: string }[] = [
  {
    mode: "list",
    label: "list",
    icon: (
      <svg width="14" height="14" viewBox="0 0 11 11" fill="currentColor">
        <rect width="11" height="2" rx="1" />
        <rect y="4.5" width="11" height="2" rx="1" />
        <rect y="9" width="11" height="2" rx="1" />
      </svg>
    ),
  },
  {
    mode: "map",
    label: "map",
    icon: (
      <svg width="14" height="14" viewBox="0 0 11 11" fill="currentColor">
        <path d="M5.5 0C3.57 0 2 1.57 2 3.5c0 2.72 3.5 7.5 3.5 7.5S9 6.22 9 3.5C9 1.57 7.43 0 5.5 0zm0 4.75a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
      </svg>
    ),
  },
];

export const ViewSelector = () => {
  const { viewMode, setViewMode } = useViewStore();

  return (
    <div
      className="flex items-center gap-0"
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {viewOptions.map((v, i) => (
        <button
          key={v.mode}
          onClick={() => setViewMode(v.mode)}
          className="flex items-center gap-2 px-4 py-2 text-lg sm:text-xl font-bold transition-all"
          style={{
            background: viewMode === v.mode ? "#2d6a4f" : "transparent",
            color: viewMode === v.mode ? "#fff" : "rgba(255,255,255,0.35)",
            borderRight:
              i === 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
          }}
        >
          {v.icon}
          <span className="hidden sm:inline capitalize">{v.label}</span>
        </button>
      ))}
    </div>
  );
};
