import express from "express";
import { LoginUser, RegisterUser, UserProfile } from "../controllers/User.js";
import { adminProtection, userProtection } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.post("/register", RegisterUser);
Router.post("/login", LoginUser);
Router.get("/profile", userProtection, adminProtection, UserProfile);

export default Router;
