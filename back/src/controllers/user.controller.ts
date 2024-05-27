import { Response, Request } from "express";
import {
    findAllUser,
    findSingleUser,
    registerUser,
} from "../services/user.services";

let status = 404;
export const getUsers = async (_req: Request, res: Response) => {
    const allUser = await findAllUser();
    if (allUser.length) status = 200;
    return res.status(status).json({
        message:
            status === 404
                ? "No hay usuarios"
                : `Lista de usuarios exitosa ${allUser.length} usuarios encontrados`,
        data: allUser,
    });
};

export const getUser = async (req: Request, res: Response) => {
    const { idUser } = req.params;
    const singleUser = await findSingleUser(idUser);
    if (singleUser) status = 200;
    return res.status(status).json({
        message: singleUser
            ? `Usuario encontrado`
            : "No se encontró el usuario",
        data: singleUser,
    });
};

export const newUser = async (req: Request, res: Response) => {
    const nuevoUser = await registerUser(req.body);

    if (nuevoUser) status = 200;
    return res.status(status).json({
        message: nuevoUser
            ? "Usuario creado exitosamente"
            : "No se pudo crear el usuario :(",
        data: nuevoUser,
    });
};

//To-do: Update - Delete - Conditions
