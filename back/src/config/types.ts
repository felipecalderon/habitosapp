type Categories = "Salud" | "Trabajo" | "Estudio";
export interface User {
    id: string;
    email: string;
    password: string;
    habitos: Habit[];
    name: string;
    lastname: string;
}

export interface Habit {
    id: string;
    titulo: string;
    descripcion?: string;
    category: Categories;
    progress?: Progress[];
}

type Status = "completado" | "en progreso" | "incompleto";
interface Progress {
    id: string;
    habit: Habit;
    habitId: string;
    status: Status;
    fechaInicio: Date;
    fechaFinal?: Date;
}
