import Router from "express";
import AuthController from "../controllers/authController.js";

const router = new Router();
const authController = new AuthController();

router.post('/registration',authController.registration)
router.post('/login',authController.login)
router.get('/check', authController.check)

export default router;