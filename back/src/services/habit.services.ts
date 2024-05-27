import { Habit } from "../config/types";
import { prisma } from "../config/db";

export const createHabit = async (
    { userId }: { userId: string },
    { category, titulo, descripcion, progress }: Habit
) => {
    try {
        const newHabit = await prisma.habit.create({
            data: {
                userId,
                category,
                titulo,
                descripcion,
            },
        });
        return newHabit;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAllHabits = async ({ userId }: { userId: string }) => {
    try {
        if (!userId) throw new Error("Pasa el id wacho");
        const getHabits = await prisma.habit.findMany({
            where: {
                userId: userId,
            },
        });
        return getHabits;
    } catch (error) {
        console.log(error);
        return [];
    }
};
