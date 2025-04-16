import mongoose, { Schema,model } from "mongoose";

const schema = new Schema({
    post:{
        type: mongoose.Types.ObjectId ,
        ref:'Post',
        required:true
    },
    author:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required:true
    },
    text:{
        type: String,
        required: true
    }
    
},{timestamps:true})

export const Comment = model('Comment',schema)