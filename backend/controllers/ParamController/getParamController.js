import ParamsModule from "../../models/params.module.js";
import {response} from "express";

class GetParamController{
    async getAll(req,res){
        const result = await ParamsModule.getAllParams();
        res.json({ data: result });
    }
    async getAllAdmin(req,res){
        const result = await ParamsModule.getAllParamsAdmin();
        res.json({ data: result });
    }
    async getInfoParam(req,res){
        const result = await ParamsModule.getInfoParam(req);
        res.json({ data: result });
    }
}
export default GetParamController;