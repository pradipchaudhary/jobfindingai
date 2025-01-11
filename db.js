import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected");
        return await connection;
    } catch (error) {
        console.log("Database connection error");
    }
};

export default connectDB;
