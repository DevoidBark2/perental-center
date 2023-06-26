import allDataForFormModule from "../models/allDataForForm.module.js";

class AllDataForFormController{
    async getAll(req,res){
        const data = await allDataForFormModule.getAllData();
        res.status(200).json(data);
    }
}

export default AllDataForFormController;