import express from "express";
import { createProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } from "../controllers/Product.js";
const Router = express.Router();

Router.post("/product/create", createProduct);
Router.get("/all", getAllProducts);
Router.get("/product/:id", getSingleProduct);
Router.put("/product/:id", updateProduct);
Router.delete("/product/:id", deleteProduct);

export default Router;
