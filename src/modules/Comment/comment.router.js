import { Router } from "express";
import { protectedRouter } from "../auth/auth.controller.js";
import { addComment, deleteComment, getComments, updateComment } from "./comment.controller.js";

const commentRouter = Router();

commentRouter.route('/post/:postId/comment').post(protectedRouter,addComment).get(getComments)
commentRouter.route('/comment/:id').put(updateComment).delete(deleteComment)

export default commentRouter