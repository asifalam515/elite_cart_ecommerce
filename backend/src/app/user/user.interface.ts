import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "customer" | "seller" | "admin";
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
  };
  phone?: string;
  wishlist?: string[]; // Array of product IDs
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}
