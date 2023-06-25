import Router from "express";

import EnteredController from "../controllers/enteredController.js";

const router = new Router();
const enteredController = new EnteredController();

router.get('/',enteredController.getAll)
router.post('/',enteredController.create)
router.delete('/:id',enteredController.delete)

export default router;