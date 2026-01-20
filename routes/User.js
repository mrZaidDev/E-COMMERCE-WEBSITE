import express from "express";
import { AuthVerify, LoginUser, RegisterUser, UserProfile } from "../controllers/User.js";
import { adminProtection, userProtection } from "../middlewares/authMiddleware.js";
const Router = express.Router();

Router.post("/register", RegisterUser);
Router.post("/login", LoginUser);
Router.get("/verify", userProtection, AuthVerify );
Router.get("/profile", userProtection, UserProfile);

export default Router;
