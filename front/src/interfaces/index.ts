export type Categories = "Salud" | "Trabajo" | "Estudio";
export type Status = "completado" | "en progreso" | "incompleto";

export interface Habit {
    id: string;
    titulo: string;
    descripcion?: string;
    category: Categories;
}

export interface User {
    id: string;
    email: string;
    password: string;
    name: string;
    lastname: string;
    habitos: Habit[];
}

export interface Progress {
    id: string;
    habit: Habit;
    habitId: string;
    status: Status;
    fechaInicio: Date;
    fechaFinal?: Date;
}
