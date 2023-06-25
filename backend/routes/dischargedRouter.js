import Router from "express";
import DischargedController from "../controllers/dischargedController.js";

const router = new Router();
const dischargedController = new DischargedController();

router.get('/',dischargedController.getAll)
router.post('/',dischargedController.create)
router.delete('/:id',dischargedController.delete)

export default router;