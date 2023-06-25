import registrationModule from "../models/registration.module.js";

class RegistrationController {
    async getAll (req, res){
        const ageAtAdmission = await registrationModule.getAllRegistration();
        res.json(ageAtAdmission);
    }
    async create (req, res){
        const {name} = req.body;
        const result = await registrationModule.createRegistration(name);
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
    async delete(req, res){
        const {id} = req.params;
        const result = await registrationModule.deleteRegistration(id)
        if (result.success) {
            res.status(200).json({ success: true, message: result.message });
        } else {
            res.status(400).json({ success: false, message: result.message });
        }
    }
}

export default RegistrationController;