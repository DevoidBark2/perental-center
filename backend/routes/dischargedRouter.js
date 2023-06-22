import Router from "express";
import DischargedController from "../controllers/dischargedController.js";

const router = new Router();
const dischargedController = new DischargedController();

router.get('/',dischargedController.getDischarged)
router.post('/',dischargedController.createDischarged)

export default router;