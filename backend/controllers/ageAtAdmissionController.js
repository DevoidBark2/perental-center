import ageAtAdmissionModule from "../models/ageAtAdmission.module.js";

class AgeAtAdmissionController {
    async getAll (req, res){
        const ageAtAdmission = await ageAtAdmissionModule.getAllAgeAdmission();
        res.json(ageAtAdmission);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await ageAtAdmissionModule.createAgeAdmission(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete(req, res){
        const {id} = req.params;
        const result = await ageAtAdmissionModule.deleteAgeAdmission(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default AgeAtAdmissionController;