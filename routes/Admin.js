import express from "express";
import {
  adminProtection,
  userProtection,
} from "../middlewares/authMiddleware.js";
import {
  getAllUsers,
  GetSingleUser,
  GetAllOrders,
  DeleteProduct,
  UpdateUser,
  DeleteUser,
  GetSingleOrder,
  UpdateOrder,
} from "../controllers/Admin.js";
import { createProduct } from "../controllers/Product.js";

const Router = express.Router();

// Admin USER routes
Router.get("/users", getAllUsers);
Router.get("/users/:id", GetSingleUser);
Router.put("/users/:id", UpdateUser);
Router.delete("/users/:id", DeleteUser);

// Admin ORDER routes
Router.get("/orders", GetAllOrders);
Router.get("/orders/:id", GetSingleOrder);
Router.put("/orders/:id", UpdateOrder);

// Admin PRODUCT routes
Router.post("/product/create", createProduct);
Router.delete("/product/:id", DeleteProduct);

export default Router;
