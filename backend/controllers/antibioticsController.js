import antibioticsModel from "../models/antibiotics.module.js";
class AntibioticsController {
    async getAll (req, res){
        const antibiotics = await antibioticsModel.getAllAntibiotics();
        res.json(antibiotics);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await antibioticsModel.createAntibiotic(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete (req, res){
        const {id} = req.params;
        const result = await antibioticsModel.deleteAntibiotic(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default AntibioticsController;