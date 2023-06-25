import Router from "express";
import BmpController from "../controllers/bmpController.js";

const router = new Router();
const bmpController = new BmpController();

router.get('/',bmpController.getAll)
router.post('/',bmpController.create)
router.delete('/:id',bmpController.delete)

export default router;