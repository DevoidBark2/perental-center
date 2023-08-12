import Router from "express";
import GetParamController from "../controllers/ParamController/getParamController.js";

const router = new Router();
const getParamController = new GetParamController();

router.get('/',getParamController.getAll)
router.get('/get_param_admin',getParamController.getAllAdmin)
router.get('/get_param_admin/:id',getParamController.getInfoParam)

export default router;