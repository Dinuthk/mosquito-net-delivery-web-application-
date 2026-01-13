import mongoose from "mongoose";

//const uri = 'mongodb+srv://dinuthkumara:1234567890@cluster1.voktqjd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
const uri = 'mongodb+srv://dinuthkumara5:12345678abc@cluster0.g7ilion.mongodb.net/food-del';
//const uri = 'mongodb+srv://dinuthkumara5:<db_password>@cluster0.g7ilion.mongodb.net/food-del?retryWrites=true&w=majority&appName=Cluster0';
export const connectDB = async ()=>{
    try{
        await mongoose.connect(uri);
        console.log("DB Conected")
    }
    catch(error){
        console.log('MongoDB Error: ',error)
    }
    //await mongoose.connect('mongodb+srv://dinuthkumara:1234567890@cluster1.voktqjd.mongodb.net/food-del').then(()=>console.log("DB Conected"));
}