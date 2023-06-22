import Router from "express";
import UsersController from "../controllers/usersController.js";

const router = new Router();
const userController = new UsersController();

router.get('/',userController.getUsers)
router.get('/:id',userController.getOneUser)
router.post('/',userController.createUser)
router.put('/:id',userController.changeUsers)
router.delete('/:id',userController.deleteUser)

export default router;