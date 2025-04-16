import { User } from "../../DB/models/User.Schema.js";
import { catchError } from "./catchError.js";
import bcrypt from 'bcrypt'

export const CheckEmail = catchError(async (req, res, next) => {
    let user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).json({ message: "Email already exists" })
        req.body.password=bcrypt.hashSync(req.body.password,8)
    next()
})