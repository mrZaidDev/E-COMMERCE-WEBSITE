// Core imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Custom imports
import connectDB from "./config/DBConfig.js";
// import errorHandler from "./middlewares/errorHandler.js";
import OrderRoutes from './routes/Order.js'
import ProductRoutes from "./routes/Product.js";
import UserRoutes from "./routes/User.js";
import DiscountRoutes from './routes/Discount.js'

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser())

// Routes
app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/discount", DiscountRoutes);
app.use("/api/orders", OrderRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} ✅`);
});
