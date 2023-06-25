import Router from "express";
import GestationPeriodController from "../controllers/gestationPeriodController.js";

const router = new Router();
const gestationPeriod = new GestationPeriodController();

router.get('/',gestationPeriod.getAll)
router.post('/',gestationPeriod.create)
router.delete('/:id',gestationPeriod.delete)

export default router;