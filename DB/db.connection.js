import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
export const DBconnecrtion = mongoose.connect( 'mongodb://127.0.0.1:27017/Blog').then(() => {
    console.log("DB connected");
}).catch((err) => {
    console.log(err);
})