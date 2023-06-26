import Router from "express";
import AllDataForFormController from "../controllers/allDataForFormController.js";

const router = new Router();
const allDataForFormController = new AllDataForFormController();

router.get('/',allDataForFormController.getAll)


export default router;