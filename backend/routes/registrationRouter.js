import Router from "express";
import RegistrationController from "../controllers/registrationController.js";

const router = new Router();
const registrationController = new RegistrationController();

router.get('/',registrationController.getAll)
router.post('/',registrationController.create)
router.delete('/',registrationController.delete)

export default router;