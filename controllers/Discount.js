import DiscountModel from "../models/Discount.js";

export const CreateDiscount = async (req, res) => {
  const { code, discountType, value, minimumPurchase } = req.body;
  if (!code || !discountType || !minimumPurchase) {
    return res.status(404).json({ message: "All fields are required" });
  }
  try {
    const createdDiscount = await DiscountModel.create(req.body);
    return res
      .status(201)
      .json({ message: "Discount code created successfully", createdDiscount });
  } catch (error) {
    return res.status(500).json({ message: "error occurred" });
  }
};

export const AllDiscounts = async (req, res) => {
  try {
    const allDiscounts = await DiscountModel.find({});
    return res.status(200).json(allDiscounts);
  } catch (error) {
    return res.status(500).json({ message: "error occurred" });
  }
};

export const UpdateDiscount = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ message: "No id provided" });
  }
  try {
    const updateDiscountCode = await DiscountModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
    );
    return res
      .status(200)
      .json({ message: "discount updated successfully", updateDiscountCode });
  } catch (error) {
    return res.status(500).json({ message: "error occurred" });
  }
};

export const DeleteDiscount = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ message: "No id provided" });
  }
  try {
     await DiscountModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "discount deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "error occurred" });
  }
};

export const GetSingleDiscount = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).json({ message: "No id provided" });
  }
  try {
    const getDiscount = await DiscountModel.findById(id);
    return res.status(200).json({ discount: getDiscount });
  } catch (error) {
    return res.status(500).json({ message: "error occurred" });
  }
};
