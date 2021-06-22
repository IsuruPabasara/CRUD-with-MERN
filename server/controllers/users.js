import express from 'express';

import UserComponent from '../models/userComponent.js';

const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const userComponent = await UserComponent.find();            
        res.status(200).json(userComponent);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;
    try {
        const user = await UserComponent.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const { name, email, password} = req.body;
    const newUserComponent = new UserComponent({ name,email,password})
    try {
        await newUserComponent.save();

        res.status(201).json(newUserComponent );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;