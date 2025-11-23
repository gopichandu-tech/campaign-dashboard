import { create } from "zustand";
import { campaigns } from "@/data/campaigns";

interface PromptStore {
  promptText: string;
  results: any[];

  setPromptText: (value: string) => void;
  runPrompt: () => void;
}

export const usePromptStore = create<PromptStore>((set, get) => ({
  promptText: "",
  results: [],

  setPromptText: (value) => set({ promptText: value }),

  runPrompt: () => {
    const text = get().promptText.toLowerCase();
    let output = campaigns;

    // ----------- INTENT PARSING -----------

    // 1. Top campaigns by CTR
    if (text.includes("top") && text.includes("ctr")) {
      output = [...campaigns]
        .sort((a, b) => b.ctr - a.ctr)
        .slice(0, 5);
    }

    // 2. Paused campaigns
    else if (text.includes("paused")) {
      output = campaigns.filter((c) => c.status.toLowerCase() === "paused");
    }

    // 3. Best performing (by conversions)
    else if (text.includes("best") || text.includes("highest")) {
      output = [...campaigns]
        .sort((a, b) => b.conversions - a.conversions)
        .slice(0, 1);
    }

    // 4. Active campaigns
    else if (text.includes("active")) {
      output = campaigns.filter((c) => c.status.toLowerCase() === "active");
    }

    // 5. Completed campaigns
    else if (text.includes("completed")) {
      output = campaigns.filter((c) => c.status.toLowerCase() === "completed");
    }

    // 6. Unknown command
    else {
      output = [];
    }

    set({ results: output });
  },
}));
