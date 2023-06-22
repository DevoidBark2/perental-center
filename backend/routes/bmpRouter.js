import Router from "express";
import BmpController from "../controllers/bmpController.js";

const router = new Router();
const bmpController = new BmpController();

router.get('/',bmpController.getBmp)
router.post('/',bmpController.createBmp)

export default router;