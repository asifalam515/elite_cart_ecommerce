import mongoose, { Schema } from "mongoose";
import { IProduct } from "./product.interface";

const ProductSchema = new Schema<IProduct>({
  product_id: { type: String, required: true, unique: true },
  product_Name: { type: String, required: true },
  Description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
  seller: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, default: 0 },
  reviews: { type: [String], default: [] },
});

export const ProductModel = mongoose.model<IProduct>("Product", ProductSchema);
