import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema({
  description: String,
  price: Number,
  sold: Number,
  image: String,
  tags: [String],
  reviews: [
    {
      count: Number,
      rating: Number,
    },
  ],
  storeInfo: [String],
  category: String,
  offerEndTime: String,
});

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
