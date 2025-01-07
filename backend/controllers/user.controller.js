import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        
        if(!name || !email || !password ){
            return res.status(400).json({
                message: "Please enter all fields",
                success: false

            });
        }
    let user=await User.findOne({email});
    if(user){
        return res.status(400).json({
            message: "User already exists with this email",
            success: false
        });
    }
    const hasedPassword=await bcrypt.hash(password, 10);
    let newUser=new User({
        name,
        email,
        password:hasedPassword,
        role: role || 'user'
    });

    await newUser.save();

    const tokenData={
        userId: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role


    };
    console.log(process.env.JWT_SECRET);

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(201).json({
        message: "User registered successfully",
        success: true,
        token
    });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Server error",
            success: false
        });
    }
}