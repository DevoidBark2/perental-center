import translatedModule from "../models/translated.module.js";

class TranslatedController {
    async getAll (req, res){
        const ageAtAdmission = await translatedModule.getAllTranslated();
        res.json(ageAtAdmission);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await translatedModule.createTranslated(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete(req, res){
        const {id} = req.params;
        const result = await translatedModule.deleteTranslated(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default TranslatedController;