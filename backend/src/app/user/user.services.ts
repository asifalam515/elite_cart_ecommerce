import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserInDB = async (user: IUser) => {
  return await userModel.User.create(user);
};
export const userService = {
  createUserInDB,
};
