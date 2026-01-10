import DiscountModel from "../models/Discount";

export const CreateDiscount = async (req, res) => {
  const { code, discountType, value, minimumPurchase } = req.body;
  if (!code || !discountType || !value || !minimumPurchase) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const createdDiscount = await DiscountModel.create(req.body);
    return res.status(201).json({message:'Discount code created successfully',createdDiscount})
  } catch (error) {
    console.log(error)
  }
};
