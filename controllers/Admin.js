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

export const GetSingleUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export const DeleteUser = async (req, res) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error);
  }
};

export const GetAllOrders = async (req, res) => {
  try {
    const allOrders = await OrderModel.find({}).populate('user')
    return res.status(200).json({ allOrders });
  } catch (error) {
    console.log(error);
  }
};

export const GetSingleOrder = async (req,res) => {
    try {
    const order = await OrderModel.findById(req.params.id).populate('user');
    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
}

export const UpdateOrder = async (req,res) => {
    try {
    const order = await OrderModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.status(200).json({order});
  } catch (error) {
    console.log(error);
  }
}

export const DeleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    console.log(error);
  }
};

// export const CreateProduct = async (req, res) => {
//   const { name, email, price, stock, image } = req.body;
//   if (!name || !email || !price || !stock || !image) {
//     return res.status(404).json({ message: "All fields are required" });
//   }
//   try {
//     const createProduct = await ProductModel.create(req.body);
//     return res.status(201).json({ product: createProduct });
//   } catch (error) {
//     console.log(error);
//   }
// };
