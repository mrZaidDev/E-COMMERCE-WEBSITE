import express from "express";
import { AllDiscounts, CreateDiscount, DeleteDiscount, GetSingleDiscount, UpdateDiscount } from "../controllers/Discount.js";
const Router = express.Router();

Router.post("/create", CreateDiscount);
Router.get("/all", AllDiscounts);
Router.get("/get/:id", GetSingleDiscount);
Router.put("/update/:id", UpdateDiscount);
Router.delete("/delete/:id", DeleteDiscount);



export default Router;
