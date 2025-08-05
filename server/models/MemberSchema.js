import mongoose from 'mongoose';

const memberSchema = new mongoose.Schema({
    registerNo: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },

    photo: String,
    position: {
        type: String,
        required: true,
        enum: ["Senior Body Member", "Executive Body Member"]
    },
    department: String,
    role: String,
    category: String,

    createdAt: {
        type: Date,
        default: Date.now
    }
})

export const Member = mongoose.model("Member", memberSchema);