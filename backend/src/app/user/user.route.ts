import express, { Request, Response } from "express";
import { userModel } from "./user.model";
import { userController } from "./user.controller";
const router = express.Router();
router.post("/create-user", userController.createUser);
router.get("/", userController.getUsers);
router.get("/:_id", userController.getSingleUser);
router.patch("/:_id", userController.updateUser);
export const userRouter = router;
