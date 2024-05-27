"use client";
import { useHabit } from "@/stores/habits";
import { useEffect } from "react";

export default function Habits() {
    const { habits, setHabits } = useHabit();

    const getHabits = async () => {
        try {
            const userId = "664fb5b39f817cb454200924";
            const fetchData = await fetch(
                `http://localhost:3001/api/habit/all?userId=${userId}`,
            );
            const { message, data } = await fetchData.json();
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
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
