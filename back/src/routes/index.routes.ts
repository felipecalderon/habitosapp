import {Router} from "express"
import { userRouter } from "./user.routes"

export const indexRouter = Router()

indexRouter.use("/user",userRouter)