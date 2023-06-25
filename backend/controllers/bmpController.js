import bmpModule from "../models/bmp.module.js";

class BmpController {
    async getAll (req, res){
        const antibiotics = await bmpModule.getAllBmp();
        res.json(antibiotics);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await bmpModule.createBmp(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete (req, res){
        const {id} = req.params;
        const result = await bmpModule.deleteBmp(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default BmpController;