import { Response,Request } from "express";
import { findAllUser, registerUser } from "../services/user.services";

export const getUsers =async (req:Request,res:Response)=>{
try {
    const AllUser =await findAllUser()
res.status(200).json({
    message:"todo ok",
    AllUser
})
} catch (error) {
    res.status(500).json({
        message:"Something went Wrong in the SERVER :( "
    })
}
}

export const newUser=async (req:Request,res:Response)=>{

 const newuser= await registerUser(req.body)
 if(!newuser)return res.status(500).json({message:"no se creo el nuevo usuario "})
res.status(200).json(newUser)
}