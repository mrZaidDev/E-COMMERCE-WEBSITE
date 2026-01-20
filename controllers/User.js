import UserModel from "../models/User.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/GenerateToken.js";

export const RegisterUser = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const userAlreadyExists = await UserModel.findOne({ email });
    if (userAlreadyExists) {
      return res.status(404).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    const createdUser = await UserModel.create({
      name,
      email,
      password: hashPassword,
    });
    const token = generateToken(createdUser._id);
    console.log(token);
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 15,
    });
    return res
      .status(200)
      .json({ message: "User Created Successfully", createdUser });
  } catch (error) {
    console.log(error);
  }
};

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const userAlreadyExists = await UserModel.findOne({ email });
    if (!userAlreadyExists) {
      return res.status(404).json({ message: "Wrong Credentials" });
    }
    const IsPasswordCorrect = await bcrypt.compare(
      password,
      userAlreadyExists.password
    );
    if (!IsPasswordCorrect) {
      return res.status(404).json({ message: "Wrong Credentials" });
    }
    const token = generateToken(userAlreadyExists._id);
    res.cookie("access_token", token, {
      maxAge: 1000 * 60 * 15,
    });
    return res
      .status(200)
      .json({
        message: "User logged in successfully",
        user: userAlreadyExists,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UserProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const getUser = await UserModel.findById(userId);
    return res.status(200).json({ getUser });
  } catch (error) {
    console.log(error);
  }
};

export const AuthVerify = (req, res) => {
  try {
    return res.status(200).json({ message: "user verified", user: req.user });
  } catch (error) {
    res.status(500).json({ message: "user not verified" });
  }
};

