import { Post } from "../../../DB/models/post.schema.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";

const AddPost = catchError(async(req,res)=>{
    if(req.body.image)req.body.image = req.file.filename
    const post = await Post.insertMany(req.body)
    res.status(201).json({message:"Post Created",post})
})

const getPosts = catchError(async(req,res)=>{
    const posts = await Post.find()
    res.status(200).json({message:"Success...",posts})
})

const getPost = catchError(async(req,res,next)=>{
    const post = await Post.findById(req.params.id)
    if(!post) return next(new AppError('Post not found',404))
    res.status(200).json({message:"Success...",post})
})

const LikePost = catchError(async(req,res,next)=>{
    const post = await Post.findById(req.params.id)
    if(!post) return next(new AppError('Post not found',404))
        if (post.likes.includes(req.user._id)) {  // to prevent user from liking the same post twice
            next(new AppError('You already liked this post',401))
        }
        post.likes.push(req.user._id)
        await post.save()
    res.status(200).json({message:"Post liked...",post})
})

const unlikePost = catchError(async(req,res,next)=>{
    const post = await Post.findById(req.params.id)
    if(!post) return next(new AppError('Post not found',404))
    if(!post.likes.includes(req.user._id)) return next(new AppError('You have not liked this post',401))
    post.likes = post.likes.filter(id => id !== req.user._id)
    await post.save()
    res.status(200).json({message:"Post unliked...",post})
})

const updatePost = catchError(async(req,res,next)=>{
    const post = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!post) return next(new AppError('Post not found',404))
    res.status(200).json({message:"posta updated...",post})
})

const deletePost = catchError(async(req,res,next)=>{
    const post = await Post.findByIdAndDelete(req.params.id)
    if(!post) return next(new AppError('Post not found',404))
    res.status(200).json({message:"posta deleted...",post})
})  

export{
    AddPost,
    getPosts,
    getPost,
    updatePost,
    deletePost,
    LikePost,
    unlikePost
}