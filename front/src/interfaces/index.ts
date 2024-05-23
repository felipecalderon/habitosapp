type Categories = "Salud" | "Trabajo" | "Estudio";
type Status = "completado" | "en progreso" | "incompleto";

export interface Habit {
    id: string;
    titulo: string;
    descripcion?: string;
    category: Categories;
}

export interface User {
    id: string;
    email: string;
    contraseña: string;
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
