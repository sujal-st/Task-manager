const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors");
const connectDB = require("./config/db.js");
// import userauth from 
dotenv.config();

const app=express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true
}))
connectDB()

app.use(express.json())


// middleware

// routes
app.use("/user",require("./routes/authRoutes.js"))

// server start
const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log("server running "+ PORT)
})