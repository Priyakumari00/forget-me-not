import { Router } from "express";
import { UserController } from "../controllers/user.controller.mjs";

const router = Router();
router.post("/home",UserController.homePage);

export default router;