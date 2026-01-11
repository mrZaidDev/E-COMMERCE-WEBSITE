import express from "express";
import {
  adminProtection,
  userProtection,
} from "../middlewares/authMiddleware.js";
import { DeleteProduct, GetAllOrders, getAllUsers } from "../controllers/Admin.js";
const Router = express.Router();

Router.get("/users", userProtection, adminProtection, getAllUsers);
Router.get("/orders", userProtection, adminProtection, GetAllOrders);
Router.delete(
  "/product/:id",
  userProtection,
  adminProtection,
  DeleteProduct
);

export default Router;
