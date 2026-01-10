import mongoose from "mongoose";

const DiscountSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    description: String,
    discountType: {
      type: String,
      required: true,
      enum: ["PERCENT", "SHIPPING", "FLAT"],
    },
    value: {
      type: Number,
      required: true,
    },
    minimumPurchase: {
      type: Number,
      required: true,
    },
    active:{
        type:Boolean,
        required:true,
        default:true
    }
  },
  { timestamps: true }
);

const DiscountModel = mongoose.model("Discount", DiscountSchema);

export default DiscountModel;
