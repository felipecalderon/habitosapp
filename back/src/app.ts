import express from "express"
import morgan from "morgan"
import cors from "cors"
import { indexRouter } from "./routes/index.routes"

export const app = express()
app.use(express.json())
app.use(morgan("dev"))
app.use(express.urlencoded({
    extended:true
}))
app.use(indexRouter)
