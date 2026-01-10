import express from "express";
import { AllDiscounts, CreateDiscount, DeleteDiscount, UpdateDiscount } from "../controllers/Discount.js";
import { adminProtection, userProtection } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.post("/create", CreateDiscount);
Router.get("/all", AllDiscounts);
Router.put("/update/:id", UpdateDiscount);
Router.delete("/delete/:id", DeleteDiscount);



export default Router;
