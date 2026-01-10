import express from "express";
import { CreateDiscount } from "../controllers/Discount";
import { adminProtection, userProtection } from "../middlewares/authMiddleware";
const Router = express.Router();

Router.post("create", userProtection, adminProtection, CreateDiscount);

export default Router;
