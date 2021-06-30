import express from 'express';
import mongoose from 'mongoose';
import auth from "../middleware/auth.js"
import Post from '../models/post.js';

const router = express.Router();

router.get('/',auth, async (req, res) => { 
    try {
        const post = await Post.find();            
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

router.get('/:id',auth, async (req, res) => { 
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

router.post('/',auth, async (req, res) => {
    const { title, status, creator} = req.body;
    const newPost = new Post({ title, status, creator})
    try {
        await newPost.save();

        res.status(201).json(newPost );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
})

router.patch('/:id',auth, async (req, res) => {
    const { id } = req.params;
    const { title, status, creator} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, status, _id: id };

    await Post.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
})

router.delete('/:id', auth, async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await Post.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
})

export default router;