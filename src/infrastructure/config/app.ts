import dotenv from "dotenv"
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import morgan from "morgan";
import { createServer } from 'node:http';
import userRouter from '../routes/userRoutes';



export const app = express();
export const httpServer = createServer(app);


app.use(cookieParser())
app.use(cors(
  {
    origin: process.env.CORS_URL,
    methods: 'GET,POST,PUT,PATCH,DELETE',
    credentials: true, 
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 5000 }))
app.use(morgan('dev'))



app.use("/api", userRouter);


// app.use(errorHandler)
