import { Router } from "express";
import { userRouter } from "./user.routes";
import { habitRouter } from "./habit.routes";

export const indexRouter = Router();

indexRouter.use("/user", userRouter);
indexRouter.use("/habit", habitRouter);
