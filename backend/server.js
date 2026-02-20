import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import 'dotenv/config'

import userRouter from "./routes/userRoute.js";
import studentRouter from "./routes/studentRoute.js";
import subjectRouter from "./routes/subjectRoute.js";
import attendanceRouter from "./routes/attendaceRoute.js";


//app config
const app =express()
const port = process.env.PORT;

//middleware

app.use(express.json())
app.use(cors())

//db connection
connectDB()


//API end point
app.use("/api/user", userRouter);
app.use("/api/student", studentRouter);
app.use("/api/subject", subjectRouter);
app.use("/api/attendance", attendanceRouter);


app.get("/",(req, res)=>{
    res.send("API IS working")
})

app.listen(port,()=>{
    console.log(`server started`)
})