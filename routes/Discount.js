import express from "express";
import { CreateDiscount } from "../controllers/Discount.js";
import { adminProtection, userProtection } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.post("/create", CreateDiscount);

export default Router;
