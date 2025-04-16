import mongoose, { Schema,model } from "mongoose";

const schema = new Schema({
    title:{
        type:String ,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    imageUrl:String,
    likes:[{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }]
},{
    timestamps:true
})

export const Post = model('Post',schema)