import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authModule from "../models/auth.module.js";
class AuthController{
    async registration(req,res){
        try{
            const {email,password} = req.body;
            const candidate = await authModule.findOne(email);
            if(candidate.success){
                res.status(400).json({message:"Такой пользователь существует!"})
            }
            const hashPassword = bcrypt.hashSync(password,5);
            const user = await authModule.createUser(email,hashPassword)
        }catch (e){
            console.log(e)
            res.status(400).json({message:"Error registration!"})
        }
    }
    async login(req,res){
        try{

        }catch (e){
            console.log(e)
            res.status(400).json({message:"Error login!"})
        }
    }
    async check(req,res){

    }
}

export default AuthController;