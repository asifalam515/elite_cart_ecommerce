import { Request, Response } from "express"; // Import Request and Response
import { userService } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.users; // Use req.body directly
    const newUser = await userService.createUserInDB(user); // Store the created user

    res.status(200).json({
      message: "User created",
      data: newUser, // Return the created user
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const userController = {
  createUser,
};
