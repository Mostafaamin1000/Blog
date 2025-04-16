import { Schema,model } from "mongoose";    
import bcrypt from 'bcrypt'
const schema = new Schema({
    name :{
        type: String,
        required: true
    } ,
    email :{
        type: String,
        required: true,
        unique : true
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true})

schema.pre('save',function(){
    this.password=bcrypt.hashSync(this.password,10);   
})

export const User = model('User',schema); 