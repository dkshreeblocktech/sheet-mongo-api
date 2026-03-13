const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster0.uhgapf3.mongodb.net/students",{
  useNewUrlParser:true,
  useUnifiedTopology:true
});

const Student = mongoose.model("details",{
  name:String,
  fathername:String,
  mothername:String,
  location:String
});

app.post("/add", async (req,res)=>{

  const data = new Student(req.body);
  await data.save();

  res.send("Saved");

});

app.listen(process.env.PORT || 3000, ()=>{
  console.log("Server running");
});
