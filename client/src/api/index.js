import axios from 'axios';

const urlPost = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(urlPost);
export const createPost = (newPost) => axios.post(urlPost, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${urlPost}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${urlPost}/${id}`);


const urlUser = 'http://localhost:5000/users';

export const fetchUsers = () => axios.get(urlUser);
export const createUser = (newUser) => axios.post(urlUser, newUser);
