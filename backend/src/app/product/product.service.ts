import { userModel } from "../user/user.model";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductToDB = async (productData: IProduct, sellerId: string) => {
  //create the product
  const product = await ProductModel.create({
    ...productData,
    seller: sellerId,
  });
  await userModel.User.findByIdAndUpdate(
    sellerId,
    { $push: { products: product.id } },
    { new: true }
  );
  return product;
};

export const ProductServices = { createProductToDB };
