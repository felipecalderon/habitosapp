export interface Habit {
    id: string
    fechaInicio: Date
    fechaFinal?: Date
    titulo: string
    descripcion?: string
    category: 'Salud' | 'Trabajo' | 'Estudio'
}