import Router from "express";
import AgeAtAdmissionController from "../controllers/ageAtAdmissionController.js"

const router = new Router();
const ageAtAdmission = new AgeAtAdmissionController();

router.get('/',ageAtAdmission.getAll)
router.post('/',ageAtAdmission.create)
router.delete('/:id',ageAtAdmission.delete)

export default router;