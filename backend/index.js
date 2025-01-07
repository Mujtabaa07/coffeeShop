import express from "express"
import connectDB from "./utils/db.js"
import userRoutes from "./routes/user.route.js"
import dotenv from "dotenv"


dotenv.config({});

const app=express()

app.use(express.json())
app.use("/api", userRoutes) // http://localhost:3000/api/register

app.listen(3000,()=>{
    connectDB()
    console.log("app is listening on port 3000")
    
})