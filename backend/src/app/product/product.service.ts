import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductToDB = async (product: IProduct) => {
  return await ProductModel.create(product);
};

export const ProductServices = { createProductToDB };
