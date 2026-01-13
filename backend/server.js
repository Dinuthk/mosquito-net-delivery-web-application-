 import express from "express"
 import cors from "cors"
import { connectDB } from "./config/Db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import'dotenv/config'
import cartRouter from "./routes/cartRout.js"

 //app config
 const app = express()
 const port = 4000

 //middleware
 app.use(express.json())
 app.use(cors())

 //db connection
 connectDB(); 

 //api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))  //img export for the frontend
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

 app.get("/",(req,res)=>{
    res.send("API Workings")
 })

 app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
 })

 //mongodb+srv://dinuthkumara:<password>@cluster1.voktqjd.mongodb.net/?