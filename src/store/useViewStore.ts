import { create } from "zustand";

export type ViewMode = "list" | "map";

interface ViewState {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
}

export const useViewStore = create<ViewState>((set) => ({
  viewMode: "list",
  setViewMode: (mode) => set({ viewMode: mode }),
}));
