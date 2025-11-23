import { create } from "zustand";

type UIStore = {
  sidebarOpen: boolean;
  isNotification : boolean,
  openSearch : boolean,

  toggleOpenSearch : () => void;
  toggleSidebar: () => void;
  toggleIsNotification: () => void;
};

export const useUIStore = create<UIStore>((set) => ({
  openSearch : false,
  sidebarOpen: true,
  isNotification : true,

  toggleOpenSearch : () => set((state) => ( {
    openSearch : !state.openSearch
  })),

  toggleSidebar: () => set((state) => ({
    sidebarOpen: !state.sidebarOpen,
  })),

  toggleIsNotification : () => set((state) => ({
    isNotification : !state.isNotification
  })),

}));
