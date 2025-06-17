import dotenv from 'express';
import express from 'express';
import connectDB from './config/db';
import cookieSession from 'cookie-session';


//Load environment variable
dotenv.config();

const app=express();

connectDB();

//parse json request convert json from frontend-> readable object
app.use(express.json());

//cors: Allow frontend with different port to communicate with backend
app.use(cors({
    origin: process.env.CLIENT_URL,
    Credentials:true;
}))

app.use(cookieSession({
    name: 'session',
    maxAge: 24*60*60*1000,
    keys:['@d85&^5dume']
}))

app.get

