import { create } from "zustand";

interface FilterState {
  status: string[];
  ctr: number;

  toggleStatus: (value: string) => void;
  setCTR: (value: number) => void;

  clearFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  status: [],
  ctr: 0,

  toggleStatus: (value) =>
    set((state) => ({
      status: state.status.includes(value)
        ? state.status.filter((v) => v !== value)
        : [...state.status, value],
    })),

  setCTR: (value) => set({ ctr: value }),

  clearFilters: () =>
    set({
      status: [],
      ctr: 0,
    }),
}));
