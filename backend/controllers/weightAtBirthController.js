import weightAtBirthModule from "../models/weightAtBirth.module.js";

class WeightAtBirthController {
    async getAll (req, res){
        const ageAtAdmission = await weightAtBirthModule.getAllWeightAtBirth();
        res.json(ageAtAdmission);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await weightAtBirthModule.createWeightAtBirth(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete(req, res){
        const {id} = req.params;
        const result = await weightAtBirthModule.deleteWeightAtBirth(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default WeightAtBirthController;