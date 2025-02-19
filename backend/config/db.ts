import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDB = async () => {
  try {
    
    const conn = await mongoose.connect(process.env.MONGO_URI as string, {autoIndex: true});

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    return conn;

  } catch (err: any) {
    console.error(`MongoDB Connection Error: ${err.message}`);
    process.exit(1);
  }
}

export default connectDB;
