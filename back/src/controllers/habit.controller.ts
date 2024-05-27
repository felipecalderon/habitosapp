import { Request, Response } from "express";
import { createHabit, getAllHabits } from "../services/habit.services";

export const newHabit = async (req: Request, res: Response) => {
    const { userId } = req.query;
    const idU = userId?.toString() || "";
    const createNewHabit = await createHabit({ userId: idU }, req.body);
    res.status(200).json({
        message: "Todo bien papu",
        data: createNewHabit,
    });
};

export const getHabits = async (req: Request, res: Response) => {
    const userId = req.query.userId as string;
    const habits = await getAllHabits({ userId });
    res.status(200).json({
        message: "Todo bien papu",
        data: habits,
    });
};
