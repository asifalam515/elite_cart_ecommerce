import express, { Request, Response } from "express";
import { userModel } from "./user.model";
import { userController } from "./user.controller";
export const router = express.Router();
router.post("/create-user", userController.createUser);
router.get("/", userController.getUsers);
router.patch("/:_id", userController.updateUser);
