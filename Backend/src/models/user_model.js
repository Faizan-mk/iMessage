import mongoose from 'mongoose';

const userSchema=new mongoose.Schema({
    clerkid:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    fullname:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
        default:""
    }

},{timestamps:true})

const user=mongoose.model("user",userSchema);
export default user;