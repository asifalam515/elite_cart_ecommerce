import { ObjectId } from "mongoose";

export interface IProduct {
  product_id: string;
  product_Name: string;
  Description: string;
  price: number;
  category: string;
  images: string[];
  seller: ObjectId;
  rating: number;
  reviews: string[];
}
