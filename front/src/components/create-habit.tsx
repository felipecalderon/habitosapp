"use client";
import { Categories, Habit } from "@/interfaces";
import { useHabit } from "@/stores/habits";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
type User = {
    userId: string;
};
export default function CreateNewHabit() {
    const { habits, setHabits } = useHabit();
    const [form, setForm] = useState<Habit & User>({
        id: "asdsadas",
        category: "Trabajo",
        titulo: "Mi primer Habito",
        descripcion: "Descripcion del habito",
        userId: "",
    });
    const createHabitHandler = async () => {
        try {
            const fetchData = await fetch(
                `${process.env.NEXT_PUBLIC_URL}/api/habit?userId=${form.userId}`,
                {
                    method: "Post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        category: form.category,
                        descripcion: form.descripcion,
                        titulo: form.titulo,
                    }),
                },
            );
            const { message, data } = await fetchData.json();
            setHabits([...habits, data]);
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    return (
        <>
            {/* TAREA: CREAR FORMULARIO */}
            {/* TAREA: CREAR HANDLER QUE MODIFIQUE EL FORM */}
            <form>
                <Input
                    label="User ID"
                    value={form.userId}
                    onChange={(e) =>
                        setForm({ ...form, userId: e.target.value })
                    }
                ></Input>
                <Input
                    label="Titulo"
                    value={form.titulo}
                    onChange={(e) =>
                        setForm({ ...form, titulo: e.target.value })
                    }
                ></Input>
                <Input
                    label="Categoria"
                    value={form.category}
                    onChange={(e) =>
                        setForm({
                            ...form,
                            category: e.target.value as Categories,
                        })
                    }
                ></Input>
                <Input
                    label="Descripcion"
                    value={form.descripcion}
                    onChange={(e) =>
                        setForm({ ...form, descripcion: e.target.value })
                    }
                ></Input>
            </form>
            <Button
                onClick={createHabitHandler}
                className="bg-violet-500 text-white"
            >
                Crear hábito
            </Button>
        </>
    );
}
