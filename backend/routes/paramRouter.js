import Router from "express";
import GetParamController from "../controllers/ParamController/getParamController.js";

const router = new Router();
const getParamController = new GetParamController();

router.get('/',getParamController.getAll)
router.get('/get_param_admin',getParamController.getAllAdmin)
router.get('/get_param_admin/:id',getParamController.getInfoParam)
router.post('/create_new_param',getParamController.createParam)
router.post('/create_new_value_param',getParamController.createValueParam)

export default router;