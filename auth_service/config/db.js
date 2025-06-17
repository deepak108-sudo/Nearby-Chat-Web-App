import mongoose from "mongooses";
import dotenv from '.dotenv';
dotenv.config();

const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"authdb",
        });
        console.log("MONGO DB Database Connected");
    }catch(error){
        console.log("Not connected",error.message);
        process.exit(1);
    }
}

export default connectDB;