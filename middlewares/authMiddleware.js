import jwt from "jsonwebtoken";
import UserModel from "../models/User.js";

export const userProtection = async (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json({ message: "no token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const payload = decoded.payload
    const user = await UserModel.findById(payload)
    console.log(user)
    req.user = user
    next();
  } catch (error) {
    return res.status(404).json({ message: "Token is not valid" });
  }
};

export const adminProtection = async (req,res,next) => {
    if(req.user.role !== "admin") {
        return res.status(403).json({message:"not authorized"})
    }
    next()
}
