import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import connectDB from "../auth_service/config/db";

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
