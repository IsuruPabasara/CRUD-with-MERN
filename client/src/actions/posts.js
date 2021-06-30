import axios from 'axios';
const urlPost = 'http://localhost:5000/posts';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(urlPost, { headers: {authToken: localStorage.getItem("authToken"),}});
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await axios.post(urlPost, post, { headers: {authToken: localStorage.getItem("authToken"),}});

    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await axios.patch(`${urlPost}/${id}`, post, { headers: {authToken: localStorage.getItem("authToken"),}});

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${urlPost}/${id}`, { headers: {authToken: localStorage.getItem("authToken"),}});

    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
};