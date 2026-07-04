import mongoose from 'mongoose';

const messageSchema=new mongoose.Schema({
    senderid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    receiverid:{
        type:mongoose.Schema.Types.ObjectId,
         ref:"user",
        required:true

    },
    text:{
        type:string
    },
    image:{
        type:string
    },
    video:{
        type:string
    }

},{timestamps:true})

const message=mongoose.model('message',messageSchema);
export default message;