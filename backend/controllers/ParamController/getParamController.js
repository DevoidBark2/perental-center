import ParamsModule from "../../models/params.module.js";
import {response} from "express";

class GetParamController{
    async getAll(req,res){
        const result = await ParamsModule.getAllParams();
        console.log(result)
        res.json({ count: result });
    }
}
export default GetParamController;