import Router from "express";
import AntibioticsController from "../controllers/antibioticsController.js";

const router = new Router();
const antibioticsController = new AntibioticsController();

router.get('/',antibioticsController.getAll)
router.post('/',antibioticsController.create)
router.delete('/:id',antibioticsController.delete)

export default router;