import { User } from "../../../DB/models/User.Schema.js"
import { catchError } from "../../middleware/catchError.js"

const getUserData = catchError(async(req,res)=>{
    const user = await User.find()
    res.status(200).json({message:"Success...",user})
})

export {
    getUserData
}
