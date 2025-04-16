import express from "express";
import { DBconnecrtion } from "./DB/db.connection.js";
import { bootstrap } from "./src/bootstrap.js";
import { AppError } from "./src/utils/AppError.js";
import { globalError } from "./src/middleware/globalError.js";
import dotenv from 'dotenv'
dotenv.config()
const app = express();
const port = 3000
app.use(express.json())

bootstrap(app)
 

//! for unfound Routes 
app.use((req,res,next)=>{
next(new AppError (`route not found ${req.originalUrl}`, 404))
})

app.use(globalError)
    
        
process.on('unhandledRejection',(err)=>{   //! for errors outside express 
console.log("Error",err);

})
    
app.listen(port, () => {
        console.log("Server is running on port 3000");
})