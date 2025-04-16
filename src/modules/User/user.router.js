import { Router } from "express";
import { getUserData } from "./user.controller.js";
const userRouter = Router();


userRouter.get('/user',getUserData )

export default userRouter