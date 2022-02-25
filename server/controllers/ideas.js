import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";


export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const getById = async (req, res, next) => {
    const id = req.params.id;
    let post;
    try {
        post = await PostMessage.findById(id);
    } catch (err) {
      console.log(err);
    }
    if (!post) {
      return res.status(404).json({ message: "No Book found" });
    }
    return res.status(200).json({ post });
  };

// export const createPost = async (req, res)=>{
//     const idea = req.body;

//     const newIdea = new PostMessage(idea);

//     try {
//         await newPost.save();
//         res.status(201).json(newIdea);
//     } catch (error) {
//         res.status(409).json({message: error.message});
//     }
// }
export const updatePost = async (req, res)=>{
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post witch that id: ${id}`);

    const updatedPost = await PostMessage.findByIdAndUpdate(_id,{ ...post, _id},{new:true});

    res.json(updatedPost);
}
