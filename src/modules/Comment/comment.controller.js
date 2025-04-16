import { Comment } from "../../../DB/models/comment.schema.js";
import { catchError } from "../../middleware/catchError.js";
import { ApiFeatures } from "../../utils/apiFeature.js";
import { AppError } from "../../utils/AppError.js";


const addComment = catchError(async(req,res)=>{
const comment =new Comment(req.body)
await comment.save()
res.status(201).json({message:"Comment Created",comment})
})

const getComments = catchError(async(req,res)=>{
let apiFeature = new ApiFeatures(Comment.find({post:req.params.postId}),req.query).search().filter().sort().fields().pagination()
let comments = await apiFeature.mongooseQuery
res.status(200).json({message:"Success...",comments})
})

const updateComment = catchError(async(req,res,next)=>{
const comment = await Comment.findByIdAndUpdate(req.params.id,req.body,{new:true})
if(!comment) return next(new AppError('Comment not found',404))
if(comment.author.toString() !== req.user._id && req.user.role !== 'admin') return next(new AppError('Unauthorized',401))
res.status(200).json({message:"Comment updated...",comment})
})

const deleteComment = catchError(async(req,res,next)=>{
const comment = await Comment.findByIdAndDelete(req.params.id)
if(!comment) return next(new AppError('Comment not found',404))
if(comment.author.toString() !== req.user._id && req.user.role !== 'admin') return next(new AppError('Unauthorized',401))
res.status(200).json({message:"Comment deleted...",comment})
})

export{addComment,getComments,updateComment,deleteComment}