import enteredModule from "../models/entered.module.js";

class EnteredController {
    async getAll (req, res){
        const entered = await enteredModule.getAllEntered();
        res.json(entered);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await enteredModule.createEntered(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete (req, res){
        const {id} = req.params;
        const result = await enteredModule.deleteEntered(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default EnteredController;