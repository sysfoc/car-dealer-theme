import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    displayName: string;
    email: string;
    photoURL?: string;
}

const UserSchema = new Schema<IUser>({
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photoURL: { type: String },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);


