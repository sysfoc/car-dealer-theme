import mongoose, { Schema } from 'mongoose';


const LightningProductSchema = new Schema({
  title: { type: String, required: true },
  discountDaysRemaining: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  previousPrice: { type: Number },
  image: { type: String, required: true },
  rating: { type: Number, required: true },
  sold: { type: Number, required: true },
  reviews: { type: Number, required: true },
  offerEndTime: { type: String, required: true },
  itemsLeft: { type: Schema.Types.Mixed },
});


export const LightningProduct =
mongoose.models.LightningProduct || mongoose.model('LightningProduct', LightningProductSchema);

