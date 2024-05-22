import { Router } from "express";
import { getUsers, newUser } from "../controllers/user.controller";

export const userRouter = Router()

userRouter.get("/",getUsers)

userRouter.post("/",newUser)