import Router from "express";
import AgeAtAdmissionController from "../controllers/ageAtAdmissionController.js"

const router = new Router();
const ageAtAdmission = new AgeAtAdmissionController();

router.get('/',ageAtAdmission.getAgeAtAdmission)
router.post('/',ageAtAdmission.createAgeAtAdmission)

export default router;