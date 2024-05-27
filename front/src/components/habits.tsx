"use client";
import { useHabit } from "@/stores/habits";

export default function Habits() {
    const { habits } = useHabit();

    if (habits.length)
        return habits.map((habit) => (
            <>
                <div>{habit.titulo}</div>
                {habit.descripcion && <div>{habit.descripcion}</div>}
            </>
        ));
}
