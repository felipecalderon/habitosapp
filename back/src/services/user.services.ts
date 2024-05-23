import { PrismaClient } from "@prisma/client";
import { User } from "../config/types";

const prisma = new PrismaClient();
type partialUser = Partial<User>;

export const findAllUser = async () => {
    try {
        const users = await prisma.user.findMany({ include: { habit: true } });
        return users;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const findSingleUser = async (idUser: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: idUser,
            },
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const registerUser = async ({
    email,
    name,
    password,
    lastname,
}: User) => {
    try {
        const findUser = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });
        if (!findUser) {
            const userCreated = await prisma.user.create({
                data: { email, name, password, lastname },
                include: { habit: true },
            });
            return {
                id: userCreated.id,
                name: userCreated.name,
                lastname: userCreated.lastname,
                email: userCreated.email,
                habitos: userCreated.habit,
            } as partialUser;
        }

        throw new Error("Usuario ya existe");
    } catch (error) {
        console.log(error);
        return null;
    }
};
