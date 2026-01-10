import express from "express";
import {
  CreateOrder,
  GetOrderById,
  GetUserOrders,
} from "../controllers/Order.js";
import { userProtection } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.post("/create", userProtection, CreateOrder);
router.get("/my-orders",userProtection,GetUserOrders);
router.get("/:id", GetOrderById);

export default router;
