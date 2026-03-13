const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

// MongoDB connection
mongoose.connect("mongodb+srv://admin:admin123@cluster0.uhgapf3.mongodb.net/students")

.then(()=>{
    console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})

// Schema
const StudentSchema = new mongoose.Schema({

    name:String,
    fathername:String,
    mothername:String,
    location:String

})

const Student = mongoose.model("details",StudentSchema)


// Test route
app.get("/",(req,res)=>{
    res.send("API Working")
})


// Add data
app.post("/add",async(req,res)=>{

    const data = new Student({

        name:req.body.name,
        fathername:req.body.fathername,
        mothername:req.body.mothername,
        location:req.body.location

    })

    await data.save()

    res.send("Saved Successfully")

})


// Server
app.listen(10000,()=>{
    console.log("Server running")
})
