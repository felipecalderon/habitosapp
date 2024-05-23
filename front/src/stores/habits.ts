import { Habit } from "@/interfaces";
import { create } from "zustand";

interface HabitStore {
  habits: Habit[];
  setHabits: (habits: Habit[]) => void;
  createHabit: (habit: Habit) => void;
}

export const useHabit = create<HabitStore>((set, get) => ({
  habits: [],
  setHabits: (habits) => set({ habits }),
  createHabit: (habit) => {
    const { habits } = get();
    set({ habits: [...habits, habit] });
  },
}));

// probando rama
