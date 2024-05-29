"use client";
import { useHabit } from "@/stores/habits";
import { useEffect } from "react";
import { getHabits } from "@/utils/fetchData";

export default function Habits() {
    const { habits, setHabits } = useHabit();

    useEffect(() => {
        getHabits().then((habits) => setHabits(habits));
    }, []);

    if (habits.length)
        return habits.map((habit) => (
            <>
                <div>{habit.titulo}</div>
                {habit.descripcion && <div>{habit.descripcion}</div>}
            </>
        ));
}
