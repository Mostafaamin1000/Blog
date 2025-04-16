import { Router } from "express";
import { AddPost, deletePost, getPost, getPosts, LikePost, unlikePost, updatePost } from "./post.controller.js";
import { allowTo, protectedRouter } from "../auth/auth.controller.js";
const postRouter = Router()

postRouter.route('/post').post(AddPost).get(getPosts)
postRouter.route('/post/:id').get(getPost)
.delete(protectedRouter,allowTo('admin'),deletePost)
.put(protectedRouter,allowTo('admin'),updatePost)

postRouter.route('/post/:id/like').post(protectedRouter,allowTo('user'),LikePost)
postRouter.route('/post/:id/unlike').post(protectedRouter,allowTo('user'),unlikePost)

export default postRouter   