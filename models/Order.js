// import mongoose from "mongoose";

// const OrderItemSchema = new mongoose.Schema({
//   productId: {
//     type: String,
//     required: true,
//   },
//   productName: {
//     type: String,
//     required: true,
//   },
//   price: { type: Number, required: true },
//   quantity: { type: Number, required: true },
//   image: { type: String },
// });


// const OrderSchema = new mongoose.Schema({
//   customerName: { type: String },
//   customerEmail: { type: String },
//   customerPhoneNumber: { type: String },
//   shippingAddress: {
//     line1: { type: String },
//     line2: { type: String },
//     city: { type: String },
//     province: { type: String },
//     postalCode: { type: String },
//     country: { type: String },
//   },
//   items: [OrderItemSchema],
//   subtotal: { type: Number },
//   discountCode: { type: String },
//   discountAmount: { type: Number },
//   taxAmount: { type: Number },
//   shippingCost: { type: Number },
//   totalAmount: { type: Number },
//   status: {
//     type: String,
//     enum: ["confirmed", "shipped", "delivered", "cancelled"],
//     default: "confirmed",
//   },
//   paymentStatus: { type: String, enum: ["paid", "unpaid"], default: "unpaid" },
// });
