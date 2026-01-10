import mongoose, { mongo } from "mongoose";

const DBConfig = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected ✅");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default DBConfig;
