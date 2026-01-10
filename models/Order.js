import mongoose from "mongoose";

const OrderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  image: { type: String },
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  shippingAddress: {
    line1: { type: String, required: true },
    line2: { type: String },
    city: { type: String, required: true },
    province: { type: String },
    postalCode: { type: Number },
    country: { type: String, required: true },
  },
  orderItems: [OrderItemSchema],
  subtotal: { type: Number },
  discount: String,
  total: { type: Number },
  paymentMethod: {
    type: String,
    enum: ["online", "cash on delivery"],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ["paid", "unpaid"],
    required: true,
    default: "unpaid",
  },
  orderStatus: {
    type: String,
    enum: ["confirmed", "shipped", "delivered", "cancelled"],
    default: "confirmed",
  },
});

const OrderModel = mongoose.model("Order", OrderSchema);

export default OrderModel;
