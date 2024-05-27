import type { Express } from "express"; //tipo de express
import express from "express";
import morgan from "morgan";
import cors from "cors";

export const appMiddlewares = (app: Express) => {
    app.use(express.json());
    app.use(morgan("dev"));
    app.use(
        express.urlencoded({
            extended: true,
        })
    );
    app.use(
        cors({
            origin: "*",
        })
    );
};
