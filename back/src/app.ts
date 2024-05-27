import express from "express";
import { indexRouter } from "./routes/index.routes";
import { appMiddlewares } from "./middlewares";

export const app = express();
appMiddlewares(app);
app.use("/api", indexRouter);
