import Router from "express";
import ImmunoglobulinsController from "../controllers/immunoglobulinsController.js";

const router = new Router();
const immunoglobulinsController = new ImmunoglobulinsController();

router.get('/',immunoglobulinsController.getAll)
router.post('/',immunoglobulinsController.create)
router.delete('/',immunoglobulinsController.delete)

export default router;