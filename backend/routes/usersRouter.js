import Router from "express";
import UsersController from "../controllers/usersController.js";

const router = new Router();
const userController = new UsersController();

router.get('/',userController.getAll)
router.get('/:id',userController.getOne)
router.post('/',userController.create)
router.put('/:id',userController.change)
router.delete('/:id',userController.delete)

export default router;