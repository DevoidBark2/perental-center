import immunoglobulinsModule from "../models/immunoglobulins.module.js";

class ImmunoglobulinsController {
    async getAll (req, res){
        const ageAtAdmission = await immunoglobulinsModule.getAllImmunoglobulins();
        res.json(ageAtAdmission);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await immunoglobulinsModule.createImmunoglobulins(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete(req, res){
        const {id} = req.params;
        const result = await immunoglobulinsModule.deleteImmunoglobulins(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default ImmunoglobulinsController;