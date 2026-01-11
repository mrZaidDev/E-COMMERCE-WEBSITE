import OrderModel from "../models/Order.js";
import ProductModel from "../models/Product.js";
import UserModel from "../models/User.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find({});
    return res.status(200).json({ allUsers });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({});
    return res.status(200).json({ allOrders });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};
