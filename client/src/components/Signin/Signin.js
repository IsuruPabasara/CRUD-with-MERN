import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createUser } from '../../actions/users';

const Signin = ({ currentIdUser, setCurrentIdUser }) => {
  const [userData, setUserData] = useState({ name: '', email: '', password: ''});
  const user = useSelector((state) => (currentIdUser ? state.user.find((message) => message._id === currentIdUser) : null));
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    if (user) setUserData(user);
  }, [user]);

  const clear = () => {
    setCurrentIdUser(0);
    setUserData({ name: '', email: '', password: ''});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createUser(userData));
    clear();
  };

  return (
    <Grid item xs={12} sm={4}>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{`Sign Up`}</Typography>
        <TextField name="name" variant="outlined" label="Name" fullWidth value={userData.name} onChange={(e) => setUserData({ ...userData, name: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" fullWidth value={userData.email} onChange={(e) => setUserData({ ...userData, email: e.target.value })} />
        <TextField type="password" name="password" variant="outlined" label="Password" fullWidth value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    </Grid>
  );
};

export default Signin;