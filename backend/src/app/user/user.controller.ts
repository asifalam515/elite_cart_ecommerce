import { Request, Response } from "express"; // Import Request and Response
import { userService } from "./user.services";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body.users;
    const newUser = await userService.createUserInDB(user);

    res.status(200).json({
      message: "User created",
      data: newUser, // Return the created user
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
const getUsers = async (req: Request, res: Response) => {
  const getUsersData = await userService.getUsersFromDB();
  try {
    res.status(200).json({
      message: "Retrive User",
      data: getUsersData,
    });
  } catch (error) {
    res.status(500).json({
      message: { error },
    });
  }
};
export const userController = {
  createUser,
  getUsers,
};
