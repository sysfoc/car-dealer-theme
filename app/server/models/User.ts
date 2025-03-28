import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    firebaseUid: string;
    displayName: string;
    email: string;
    photoURL?: string;
    provider?: string;
}

const UserSchema = new Schema<IUser>({
    firebaseUid: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: false, unique: false },
    photoURL: { type: String },
    provider: { type: String }
}, { timestamps: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);


