import ProductModel from "../models/Product.js";

export const createProduct = async (req, res) => {
  const { name, description, price, image, stock } = req.body;
  if (!name || !price || !image || !stock) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const productCreated = await ProductModel.create(req.body);
    return res
      .status(201)
      .json({ message: "product created successfully", productCreated });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    return res.status(200).json({ allProducts });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: error.message });
  }
};

export const getSingleProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const findSingleProduct = await ProductModel.findById(id);
    return res.status(200).json({ findSingleProduct });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const updateProduct = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.status(200).json({ updateProduct });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    await ProductModel.findByIdAndDelete(id);
    return res.status(200).json({ message:"Product deleted successfully" });
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ message: error.message });
  }
};
