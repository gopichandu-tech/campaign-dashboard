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
  const text = get().promptText.toLowerCase().trim();
  let output = campaigns;

  // ==============================
  // 1️⃣ PRIORITY INTENT MATCHING
  // ==============================

  // 🔹 Top campaigns by CTR
  if (text.includes("top") && text.includes("ctr")) {
    output = [...campaigns]
      .sort((a, b) => b.ctr - a.ctr)
      .slice(0, 5);
  }

  // 🔹 Best performing campaigns by conversions
  else if (text.includes("best") || text.includes("highest")) {
    output = [...campaigns]
      .sort((a, b) => b.conversions - a.conversions)
      .slice(0, 1);
  }

  // ==============================
  // 2️⃣ STATUS MATCHES
  // ==============================

  else if (["active", "paused", "completed"].includes(text)) {
    output = campaigns.filter(
      (c) => c.status.toLowerCase() === text
    );
  }

  // ==============================
  // 3️⃣ DEPARTMENT FILTER
  // ==============================

  else {
    const departments = ["marketing", "sales", "hr", "product"];
    const dep = departments.find((d) => text.includes(d));

    if (dep) {
      output = campaigns.filter(
        (c) => c.department.toLowerCase() === dep
      );
    }
  }

  // ==============================
  // 4️⃣ PLATFORM FILTER
  // ==============================

  if (text.includes("google")) {
    output = campaigns.filter((c) =>
      c.platformBreakdown.some((p) =>
        p.platform.toLowerCase().includes("google")
      )
    );
  }

  if (text.includes("youtube")) {
    output = campaigns.filter((c) =>
      c.platformBreakdown.some((p) =>
        p.platform.toLowerCase().includes("youtube")
      )
    );
  }

  // ==============================
  // 5️⃣ BUDGET FILTER (>, <, >=, <=)
  // ==============================

  const budgetMatch = text.match(/budget\s*(>=|<=|>|<)\s*(\d+)/);
  if (budgetMatch) {
    const operator = budgetMatch[1];
    const value = Number(budgetMatch[2]);

    output = campaigns.filter((c) => {
      if (operator === ">") return c.budget > value;
      if (operator === ">=") return c.budget >= value;
      if (operator === "<") return c.budget < value;
      if (operator === "<=") return c.budget <= value;
    });
  }

  // ==============================
  // 6️⃣ FALLBACK → TEXT SEARCH
  // ==============================

  if (output === campaigns || output.length === 0) {
    output = campaigns.filter(
      (c) =>
        c.name.toLowerCase().includes(text) ||
        c.description.toLowerCase().includes(text) ||
        c.department.toLowerCase().includes(text)
    );
  }

  // Update store
  set({ results: output });
},

}));
