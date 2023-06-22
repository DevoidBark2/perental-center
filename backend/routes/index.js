import Router from "express";
const router = new Router();

import usersRouter from "./usersRouter.js";
import ageAtAdmissionRouter from "./ageAtAdmissionRouter.js";
import antibioticsRouter from "./antibioticsRouter.js";
import bmpRouter from "./bmpRouter.js";
import dischargedRouter from "./dischargedRouter.js";
import enteredRouter from "./enteredRouter.js";
import gestationPeriodRouter from "./gestationPeriodRouter.js";
import immunoglobulinsRouter from "./immunoglobulinsRouter.js";
import registrationRouter from "./registrationRouter.js";
import translatedRouter from "./translatedRouter.js";
import weightAtBirthRouter from "./weightAtBirthRouter.js";

router.use('/user',usersRouter)
router.use('/ageAtAdmission',ageAtAdmissionRouter)
router.use('/antibiotics',antibioticsRouter)
router.use('/bmp',bmpRouter)
router.use('/discharged',dischargedRouter)
router.use('/entered',enteredRouter)
router.use('/gestationPeriod',gestationPeriodRouter)
router.use('/immunoglobulins',immunoglobulinsRouter)
router.use('/registration',registrationRouter)
router.use('/translated',translatedRouter)
router.use('/weightAtBirth',weightAtBirthRouter)


export default router;