import mongoose, { Schema, Model } from "mongoose";
import bcrypt from "bcrypt";
import { IUser } from "./user.interface";
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "seller", "admin"] },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    country: { type: String },
  },
  phone: { type: String, required: true },
  //   wishlist:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}]
  createdAt: { type: Date, default: Date.now },
});
// password hasing
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    next();
  } catch (err: any) {
    console.log(err);
    next(err);
  }
});
// method to compare password
UserSchema.methods.comparePassword = async function (
  candidatePassword: string
) {
  return await bcrypt.compare(candidatePassword, this.password);
};
const User = mongoose.model<IUser>("User", UserSchema);
export const userModel = {
  User,
};
