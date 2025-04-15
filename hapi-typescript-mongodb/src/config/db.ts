import mongoose from 'mongoose';
import dotenv from 'dotenv';
// import process from 'process';

dotenv.config();

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    if (!mongoURI) throw new Error('MongoDB URI not found in environment variables');
    
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    // process.exit(1);
  }
};