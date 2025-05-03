import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema({
    name: String,
    email: String,
    phone: String,
    studentId:String
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
