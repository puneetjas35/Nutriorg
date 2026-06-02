import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
    },
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        match: [/^[0-9]{10}$/, "Enter valid 10 digit number"]
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    height: {
        type: Number,
        required: true,
        min: 0
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    healthConcern: {
        type: String,
        required: true,
        trim: true
    }
},

    { timestamps: true });

const Consultation = mongoose.model("Consultation", consultationSchema);

export default Consultation;