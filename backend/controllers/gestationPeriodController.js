import gestationPeriodModule from "../models/gestationPeriod.module.js";

class GestationPeriodController {
    async getAll (req, res){
        const entered = await gestationPeriodModule.getAllGestation();
        res.json(entered);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await gestationPeriodModule.createGestation(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete (req, res){
        const {id} = req.params;
        const result = await gestationPeriodModule.deleteGestation(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default GestationPeriodController;