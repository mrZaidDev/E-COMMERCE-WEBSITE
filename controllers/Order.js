import OrderModel from "../models/Order.js";

export const CreateOrder = async (req, res) => {
  const {
    shippingAddress,
    orderItems,
    subtotal,
    discount,
    total,
    paymentMethod,
  } = req.body;
  if (
    !shippingAddress ||
    !orderItems ||
    !subtotal ||
    !discount ||
    !total ||
    !paymentMethod
  ) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const createOrder = await OrderModel.create({
      user: req.user._id,
      shippingAddress,
      orderItems,
      subtotal,
      discount,
      total,
      paymentMethod,
    });
    return res
      .status(201)
      .json({ message: "Order Created Successfully", createOrder });
  } catch (error) {
    console.log(error);
  }
};

export const GetOrderById = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await OrderModel.findById(id);
    return res.status(200).json(order);
  } catch (error) {
    console.log(error);
  }
};

export const GetUserOrders = async (req, res) => {
  const userId = req.user._id;
  console.log(userId)
  try {
    const orders = await OrderModel.find({user:userId})
    console.log(orders)
    return res.status(200).json({orders})
  } catch (error) {
    console.log(error)
  }
};
