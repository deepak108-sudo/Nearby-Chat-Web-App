import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "userdb",
    });
    console.log("MONGO DB Database Connected");
  } catch (error) {
    console.error("Not connected", error.message);
    process.exit(1);
  }
};

export default connectDB;
