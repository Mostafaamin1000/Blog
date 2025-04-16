import { Router } from "express";
import { CheckEmail } from "../../middleware/Checkemail.js";
import { changeUserPassword, signin, signup } from "./auth.controller.js";


const authRouter=Router()


authRouter.post('/signup',CheckEmail,signup)
authRouter.post('/signin',signin)
authRouter.patch('/changepassword',changeUserPassword)

    
export default authRouter   