// Core imports
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// Custom imports
import connectDB from "./config/DBConfig.js";
// import errorHandler from "./middlewares/errorHandler.js";
import OrderRoutes from "./routes/Order.js";
import ProductRoutes from "./routes/Product.js";
import UserRoutes from "./routes/User.js";
import DiscountRoutes from "./routes/Discount.js";
import AdminRoutes from "./routes/Admin.js";

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();

// Connect to database


// Middlewares
app.use(
  cors({
    origin: "https://ecommerce-zubrand.vercel.app",
    // origin:'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes

app.use("/api/hello", (req, res) => {
  return res.status(200).json({ message: "hello bro" });
});
app.use("/api/products", ProductRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/discount", DiscountRoutes);
app.use("/api/orders", OrderRoutes);
app.use("/api/admin", AdminRoutes);

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT} ✅`);
});
