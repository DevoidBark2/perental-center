import usersModule from "../models/users.module.js";

class UsersController {
    async getAll(req,res){
        const users = await usersModule.getAllUsers();
        res.status(200).json({success:true, data:users});
    }
    async getOne(req,res){
        const {id} = req.params;
        const user = await usersModule.getUser(id);
        if(user.length === 0){
            res.status(200).json({success:false, message:"Пациент не найден"})
        }else{
            res.status(200).json({success:true, data:user});
        }
    }
    async create(req,res){
        const result = await usersModule.createUser(req)
        res.status(200).json(result)
    }

    async delete(req,res){
        const {id} = req.params;
        const result = await usersModule.deleteUser(id);
        res.json(result);
    }
    async change(req,res){
        const {id} = req.params;
        const result = await usersModule.changeUser(id);
        res.json(result);
    }
}

export default UsersController;