import { create } from "zustand";

export const useTemplateStore = create((set) => ({
  templates: [],
  setTemplate: (templates) => {
    set({ templates: templates });
  },
  clearTemplate: () => set({ templates: [] }),
}));
