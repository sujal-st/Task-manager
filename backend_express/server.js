import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";

dotenv.config();

const app=express();

connectDB()

app.use(express.json())


// middleware

// routes


// server start
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server running "+ PORT)
})