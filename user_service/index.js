import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

connectDB();

app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("User Service is running");
});

const PORT= process.env.PORT || 5001;
app.listen(PORT , ()=>{
    console.log(`User service running at http://localhost:${PORT}`);
});
