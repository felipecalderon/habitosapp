import { Router } from "express";
import { getHabits, newHabit } from "../controllers/habit.controller";

export const habitRouter = Router();

habitRouter.get("/all", getHabits);
habitRouter.post("/", newHabit);
