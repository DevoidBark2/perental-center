import Router from "express";
import TranslatedController from "../controllers/translatedController.js";

const router = new Router();
const translatedController = new TranslatedController();

router.get('/',translatedController.getAll)
router.post('/',translatedController.create)
router.delete('/',translatedController.delete)

export default router;