import { User } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    logout: () => void;
}

export const userStore = create(
    persist<UserStore>(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: "SessionUserLocal",
        },
    ),
);
