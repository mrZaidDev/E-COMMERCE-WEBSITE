import express from "express";
import { AllDiscounts, CreateDiscount } from "../controllers/Discount.js";
import { adminProtection, userProtection } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.post("/create", CreateDiscount);
Router.get("/all", AllDiscounts);

export default Router;
