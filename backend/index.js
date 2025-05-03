import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Student from "./models/Student.js";

const app = express();
const port = 7000;

const mongourl = "mongodb+srv://aman1:%2EN%40U82kYD99d2qU@mycluster.psatu5y.mongodb.net/?retryWrites=true&w=majority&appName=myCluster";

app.use(express.json());
app.use(cors());


mongoose.connect(mongourl , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} ) .then(() => console.log("Mongo Connected"))
    .catch((err) => console.log("Mongo Error" , err));
    



app.get("/", (req, res) => {
    res.json({ message: "Hello From Express App with MongoDB" });
});






// Add the Student

app.post('/students', async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json({ message: "Student added successfully" });
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});



app.get("/students" , async (req, res) => {
    try {
        const students = await Student.find();
        res.json({students});
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch students" });
    }
})

app.delete("/students/:id" , async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if(!deleteStudent){
            return res.status(404).send("Student Not Delete");
        }
        res.send("Student Delete Successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

app.listen(port , () => {
    console.log( `Server Start on Port ${port}`);
});

