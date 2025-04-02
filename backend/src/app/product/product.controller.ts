import { Request, Response } from "express";
import { ProductServices } from "./product.service";

const createProduct = async (req: Request, res: Response) => {
  const { product: products } = req.body;
  const sellerId = req.body.products.seller;

  try {
    const newProduct = await ProductServices.createProductToDB(
      products,
      sellerId
    );
    res.status(200).json({
      message: "New product Created",
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: { error },
    });
  }
};
export const productController = {
  createProduct,
};
