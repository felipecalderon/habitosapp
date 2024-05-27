import { Router } from "express";
import { getUser, getUsers, newUser } from "../controllers/user.controller";

export const userRouter = Router();

userRouter.get("/all", getUsers);
userRouter.get("/one/:idUser", getUser);
userRouter.post("/", newUser);
