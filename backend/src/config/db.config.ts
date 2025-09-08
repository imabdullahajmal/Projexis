import { config } from "./app.config";
import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        await mongoose.connect(config.MONGO_URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDatabase;
