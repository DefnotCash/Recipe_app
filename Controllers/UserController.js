import mongoose from 'mongoose';
import { UserModel } from '../models/Usermodel.js';
import { generateToken } from "../utils/util.js";

export const createUser = async(req, res) => {
    try {
        const org = new  UserModel(req.body);
        await org.save();
        res.json({
            message: "User created successfully",
            data: org
        })
    } catch (error) {
        console.error(error.message);
    }
}
export const getAllUsers = async(req, res) => {
    try {
        const org = await org.find();
        if(org) {
            res.send(org);
        }else{
            res.send("No User Found");
        }
    }catch (error) {
        console.error(error.message);
    }
}
export const getUsers = async(req, res) => {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const org = awaitUser.findById(id);
        if(org) {
            res.send(org);
        }
        }catch (error) {
            console.error(error.message);
    }
}
export const updateUser = async(req, res) => {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const org = awaitUser.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        })
        if(org) {
            res.json({
                message: "User updated successfully",
                data: org
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}
export const deleteUser = async(req, res) => {
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.json({
                message: "User not found"
            });
        }
        const id = req.params.id;
        const org = awaitUser.findByIdAndDelete(id);
        if(org) {
            res.json({
                message: "User deleted successfully"
            });
        }
    } catch (error) {
        console.error(error.message);
    }
}
export const signUp = async (req, res) => {
    const { Username, Password, Email, Role } = req.body;
  
    const userExists = await UserModel.findOne({ Email });
  
    if (userExists) {
      throw new Error("User already exists");
    }
  
    const newUser = await UserModel.create({
      Username,
      Email,
      Password,
      Role
    })
    if (newUser) {
      res.status(200).json({
        _id: newUser._id,
        Username: newUser.name,
        Email: newUser.Email,
        Role: newUser.Role,
        token: generateToken(newUser._id)
      })
    }
  
  }
  
export const loginUser = async(req, res) => {
    const { Email, Password } = req.body;
    try{
    const user = await UserModel.login({ Email, Password });
    const token = await generateToken(user._id)
    if(!user) {
        throw new Error("Invalid email or password");
    }
    if (user) {
        return res.status(200).send({msg: `${UserModel.Username}, you logged in successfully`, token});
    }
}catch (err) {
    console.log(err);
    res.status(500).send('An error occured')
}
}
