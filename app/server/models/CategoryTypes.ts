import mongoose, { Schema } from 'mongoose';

const CategoryTypeSchema: Schema = new Schema({
  title: { type: String, required: true },
  image: { type: String, default: null },
  link: { type: String, required: true },
  categoryType: { type: String, required: true },
});

export default mongoose.models.CategoryType || mongoose.model('CategoryType', CategoryTypeSchema);
