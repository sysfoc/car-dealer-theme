import mongoose, { Schema } from 'mongoose';


const CategorySchema: Schema = new Schema({
  title: { type: String, required: true },
  icon: { type: String, default: null },
  link: { type: String, required: true },
  image: { type: String, required: true },
});

export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
