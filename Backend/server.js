import express, { json } from "express";
import mongoose, { Schema } from "mongoose";
import cors from "cors";

const app = express();
const port = 3000;

app.use(json());
app.use(cors());

// DB connection

const db = async() =>{
    try {
        await mongoose.connect("mongodb://localhost:27017/userData");
        console.log("DB connected");
    } catch (error) {
        console.log(error)
    }
}

db();

// usermodel
const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    age: {type:Number,required:true},
    fatherName:{ type: String, required: true },
    motherName:{ type: String, required: true },
    mobile:{type:Number,required:true},
    mailId:{ type: String, required: true },
    password:{ type: String, required: true }
})

const userModel = mongoose.model("userData",userSchema);

// API Routing
app.get("/",(req,res)=>{
    res.json({message:"API working"})
})

app.get("/user",async(req,res)=>{
    const data = await userModel.find({});
    res.json({success:true,data:data});
})

app.post("/user",(req,res)=>{
    const addUser = new userModel({
        name: req.body.name,
        age: req.body.age,
        fatherName:req.body.fatherName,
        motherName:req.body.motherName,
        mobile:req.body.mobile,
        mailId:req.body.mailId,
        password:req.body.password
    })

    try {
        addUser.save();
        res.json({success:true,message:"The user was added"})
      } catch (error) {
        res.json({success:false,message:error})
      }
})

app.listen(port,()=>{
    console.log(`http://localhost:${port}`);
})