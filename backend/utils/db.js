import mongoose from "mongoose";

const connectDB=()=> {
   mongoose.connect("mongodb://127.0.0.1:27017/Test").then(()=>{
    console.log("Database connected")
   })
}
export default connectDB;