import { config } from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
import authRoute from "./routes/authRoute.js";

//Load environment variable
config();

const app = express();

//Authentication
app.use("/auth", authRoute);

connectDB();

//parse json request convert json from frontend-> readable object
app.use(express.json());

//cors: Allow frontend with different port to communicate with backend
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: ["@d85&^5dume"],
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Auth service running on http://localhost:${PORT}`);
});
