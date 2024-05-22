import { PrismaClient } from "@prisma/client";
import { User } from "../config/types";
const prisma = new PrismaClient();
export const findAllUser = async () => {
  const users = await prisma.user.findMany();

  return users;
};
type partialUser =Partial<User>
export const registerUser = async (newuser: User) => {
  try {
    const userCreated = await prisma.user.create({
      data: newuser,
      include: { habit: true },
    });
    return {
      name: userCreated.name,
      lastname: userCreated.lastname,
      email: userCreated.email,
      habitos: userCreated.habit,
    } as partialUser
  } catch (error) {
    console.log("🚀 ~ registerUser ~ error:", error);
    return null;
  }
};
