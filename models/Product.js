import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

const ProductModel = mongoose.model("Product", ProductSchema);

export default ProductModel;
