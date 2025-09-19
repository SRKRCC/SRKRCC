import Admin from "../models/AdminSchema.js";
import { generateToken } from "../utils/authToken.js";


export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Admin.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        
        if (password !== user.password) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }
        
        generateToken(user._id, res);

        res.status(200).json({
            _id: user.id,
            email: user.email,
            message:"Logged In Successfully"
        })
    } catch (error) {
        console.log("Error In Login Controller");
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("jwt", {
        httpOnly: true, 
        secure: true,    
        sameSite: "strict" 
    });
        res.status(200).json({ message: "Logged Out Successfully" });
    } catch (error) {
        console.log("Error in Logout Controller");
        res.status(500).json({ message: "Internal Server Error" });
    }
}