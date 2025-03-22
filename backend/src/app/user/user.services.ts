import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserInDB = async (user: IUser) => {
  return await userModel.User.create(user);
};
const getUsersFromDB = async () => {
  return await userModel.User.find();
};
export const userService = {
  createUserInDB,
  getUsersFromDB,
};
