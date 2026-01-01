const express = require("express")
const app=express();
const PORT=5000;

// middleware
app.use(express.json())

// routes



// server start
app.listen(PORT,()=>{
    console.log("server running "+ PORT)
})