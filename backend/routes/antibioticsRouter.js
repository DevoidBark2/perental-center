import Router from "express";
import AntibioticsController from "../controllers/antibioticsController.js";

const router = new Router();
const antibioticsController = new AntibioticsController();

router.get('/',antibioticsController.getAntibiotics)
router.post('/',antibioticsController.createAntibiotic)

export default router;