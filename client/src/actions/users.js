import {FETCH_ALL_USERS, CREATE_USERS} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: CREATE_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
