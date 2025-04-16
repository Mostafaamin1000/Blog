import authRouter from "./modules/auth/auth.router.js";
import commentRouter from "./modules/Comment/comment.router.js";
import postRouter from "./modules/Post/post.router.js";
import userRouter from "./modules/User/user.router.js";

 export const bootstrap = async (app) => {
app.use('/api',userRouter)
app.use('/api/auth',authRouter)
app.use('/api',postRouter)
app.use('/api',commentRouter)
}