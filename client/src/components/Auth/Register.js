import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import { TextField, Button, Typography, Paper, Grid } from '@material-ui/core';
import useStyles from './styles';

function Register () {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [displayName, setDisplayName] = useState();
    const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();

        try{
            const newUser = {email, password, passwordCheck, displayName};
            await axios.post("http://localhost:5000/users/register", newUser);
            const loginResponse = await axios.post("http://localhost:5000/users/login", {
                email, password
            });
            setUserData({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            });
            localStorage.setItem("auth-token", loginResponse.data.token);
            history.push("/");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
        
    };
   
    return ( 
        <Grid container justify="center">
        <Grid item xs={12} sm={4}>
            <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={submit}>
                <Typography variant="h6">{`Register`}</Typography>
                <TextField type="email" name="email" variant="outlined" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
                <TextField type="password" name="password" variant="outlined" label="Password" fullWidth onChange={e => setPassword(e.target.value )} />
                <TextField type="password" name="password" variant="outlined" label="Re enter Password" fullWidth onChange={e => setPasswordCheck(e.target.value )} />
                <TextField type="text" name="name" variant="outlined" label="Screen name" fullWidth onChange={e => setDisplayName(e.target.value )} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Register</Button>
            </form>
            </Paper>
        </Grid>
        </Grid>

         );
}
 
export default Register;