import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserInDB = async (user: IUser) => {
  return await userModel.User.create(user);
};
const getUsersFromDB = async () => {
  return await userModel.User.find();
};
const updateUserFromDB = async (id: string, doc: any) => {
  const filter = { id: id };
  return await userModel.User.findOneAndUpdate(filter, doc);
};
export const userService = {
  createUserInDB,
  getUsersFromDB,
  updateUserFromDB,
};
