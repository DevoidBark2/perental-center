import Router from "express";
import WeightAtBirthController from "../controllers/weightAtBirthController.js";

const router = new Router();
const weightAtBirth = new WeightAtBirthController();

router.get('/',weightAtBirth.getAll)
router.post('/',weightAtBirth.create)
router.delete('/',weightAtBirth.delete)

export default router;