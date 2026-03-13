const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

// middleware
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

// Model
const Student = mongoose.model("details",StudentSchema)


// Test route
app.get("/",(req,res)=>{
    res.send("API Working")
})


// Add data route
app.post("/add",async(req,res)=>{

    try{

        const data = new Student({

            name:req.body.name,
            fathername:req.body.fathername,
            mothername:req.body.mothername,
            location:req.body.location

        })

        await data.save()

        res.send("Saved Successfully")

    }
    catch(err){

        res.send(err)

    }

})


// View all records
app.get("/all",async(req,res)=>{

    const data = await Student.find()

    res.json(data)

})


// Server start
app.listen(10000,()=>{
    console.log("Server running on port 10000")
})
