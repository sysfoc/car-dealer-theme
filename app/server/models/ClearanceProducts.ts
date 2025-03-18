import mongoose, { Schema } from "mongoose";

const clearanceProductSchema = new Schema(
  {
   // id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    previousPrice: { type: Number },
    image: { type: String, required: true },
    rating: { type: Number, required: true },
    sold: { type: Number, required: true },
    reviews: { type: Number, required: true },
    itemsLeft: { type: Schema.Types.Mixed },
    discountDaysRemaining: { type: Number },
    offerEndTime: { type: String, required: true },
  },
  { timestamps: true }
);

export const ClearanceProduct =
  mongoose.models.ClearanceProduct || mongoose.model("ClearanceProduct", clearanceProductSchema);
