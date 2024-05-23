"use client";
import { Habit } from "@/interfaces";
import { useHabit } from "@/stores/habits";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";

export default function CreateNewHabit() {
    const { createHabit } = useHabit();
    const [form, setForm] = useState<Habit>({
        id: "asdsadas",
        category: "Trabajo",
        fechaInicio: new Date(),
        titulo: "Mi primer Habito",
        descripcion: "Descripcion del habito",
    });
    const createHabitHandler = () => {
        createHabit(form);
    };

    return (
        <>
            {/* TAREA: CREAR FORMULARIO */}
            {/* TAREA: CREAR HANDLER QUE MODIFIQUE EL FORM */}
            {/* <Input value={form.titulo} onChange={(e) => setForm({...form, titulo: e.target.value})}></Input> */}

            <Button
                onClick={createHabitHandler}
                className="bg-violet-500 text-white"
            >
                Crear hábito
            </Button>
        </>
    );
}
