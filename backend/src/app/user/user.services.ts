import { IUser } from "./user.interface";
import { userModel } from "./user.model";

const createUserInDB = async (user: IUser) => {
  return await userModel.User.create(user);
};
const getUsersFromDB = async () => {
  return await userModel.User.find();
};
const getSingleUserFromDB = async (id: string) => {
  return await userModel.User.findById(id);
};
const updateUserFromDB = async (id: string, doc: any) => {
  return await userModel.User.findByIdAndUpdate(id, doc, {
    new: true,
    runValidators: true,
  });
};
export const userService = {
  createUserInDB,
  getUsersFromDB,
  updateUserFromDB,
  getSingleUserFromDB,
};
