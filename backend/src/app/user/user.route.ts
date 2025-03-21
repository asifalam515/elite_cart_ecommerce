import express, { Request, Response } from "express";
import { userModel } from "./user.model";
export const router = express.Router();
router.post("/create-user", async (req: Request, res: Response) => {
  try {
    const user = req.body.users;
    const newUser = await userModel.User.create(user);
    res.status(200).json({
      message: "user created",
      data: newUser,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
