import dischargedModule from "../models/discharged.module.js";

class DischargedController {
    async getAll (req, res){
        const antibiotics = await dischargedModule.getAllDischarged();
        res.json(antibiotics);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await dischargedModule.createDischarged(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete (req, res){
        const {id} = req.params;
        const result = await dischargedModule.deleteDischarged(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default DischargedController;