type Categories = 'Salud' | 'Trabajo' | 'Estudio'
export interface Habit {
    id: string
    titulo: string
    descripcion?: string
    category: Categories 
}

interface User {
    id: string
    email: string
    contraseña: string
    habitos: Habit[]
}

type Status = 'completado' | 'en progreso' | 'incompleto'
interface Progress {
    id: string
    habit: Habit
    habitId: string
    status: Status
    fechaInicio: Date
    fechaFinal?: Date
}