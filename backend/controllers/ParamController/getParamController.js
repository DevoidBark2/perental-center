import ParamsModule from "../../models/params.module.js";
import {response} from "express";

class GetParamController{
    async getAll(req,res){
        const result = await ParamsModule.getAllParams();
        res.json({ count: result });
    }
}
export default GetParamController;