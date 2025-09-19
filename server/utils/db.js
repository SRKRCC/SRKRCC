import mongoose from 'mongoose';
import dotenv from "dotenv";
import  Admin  from '../models/AdminSchema.js';
dotenv.config();

const connectDB = async () => {
    try {
        console.log("MONGODB_URI:",process.env.MONGODB_URI);
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${connection.connection.name}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};


export const addData = async(username,email,password) =>{
    try {
        const user = new Admin(
            {
                username,
                email,
                password
            });
            console.log(user);
        await user.save();
        console.log("data added");
        return user;
    } catch (error) {
        console.log(error);
    }
}

export default connectDB;
