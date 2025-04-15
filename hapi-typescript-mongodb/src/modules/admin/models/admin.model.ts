import mongoose, { Schema } from 'mongoose';
import { IAdmin } from '../interfaces/admin.interface';

const adminSchema = new Schema<IAdmin>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['superadmin', 'subadmin'], required: true }
});

export const AdminModel = mongoose.model<IAdmin>('Admin', adminSchema);