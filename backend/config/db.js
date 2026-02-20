import mongoose from "mongoose"


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://mr_jinow:mr_jinow@cluster0.fis0tcc.mongodb.net/Casri').then(()=>console.log("DB connected"));
}