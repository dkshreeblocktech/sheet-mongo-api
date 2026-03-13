const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.uhgapf3.mongodb.net/?appName=Cluster0");

const Student = mongoose.model("details",{
Name:String,
FatherName:String,
MotherName:String,
Location:String
});

app.post("/add", async (req,res)=>{

const data = new Student(req.body);
await data.save();

res.send("Saved");

});

app.listen(3000, ()=>{
console.log("Server running");
});
