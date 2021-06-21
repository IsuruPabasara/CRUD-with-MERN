import mongoose from 'mongoose';
import express from 'express';

import PostComponent from '../models/postComponent.js';

const router = express.Router();

export const getPosts = async (req, res) => { 
    try {
        const postComponent = await PostComponent.find();            
        res.status(200).json(postComponent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await PostComponent.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, status, creator} = req.body;
    const newPostComponent = new PostComponent({ title, status, creator})
    try {
        await newPostComponent.save();

        res.status(201).json(newPostComponent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, status, creator} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, status, _id: id };

    await PostComponent.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostComponent.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export default router;