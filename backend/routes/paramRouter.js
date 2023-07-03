import Router from "express";
import GetParamController from "../controllers/ParamController/getParamController.js";

const router = new Router();
const getParamController = new GetParamController();

router.get('/',getParamController.getAll)

export default router;