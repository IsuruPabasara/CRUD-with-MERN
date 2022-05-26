import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import axios from "axios";
import UserContext from "../../context/userContext";
import { TextField, Button, Typography, Paper, Grid, Container, Grow } from '@material-ui/core';
import useStyles from './styles';

function Login () {
    const classes = useStyles();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const { userData, setUserData } = useContext(UserContext);

    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try{
            const loginUser = {email, password};
            const loginResponse = await axios.post("http://localhost:5000/users/login", loginUser);
            setUserData(({
                token: loginResponse.data.token,
                user: loginResponse.data.user
            }));
            localStorage.setItem("authToken", loginResponse.data.token);
            history.push("/posts");
        } catch(err) {
            err.response.data.msg && setError(err.response.data.msg)
        }
    };
    console.log("Login")
console.log(userData)

    return (
        <Container >
            <br/>
        <Grid container justify="center">
        <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={submit}>
                <Typography variant="h6">{`Loginsssss`}</Typography>
                <TextField type="email" name="email" variant="outlined" label="Email" fullWidth onChange={(e) => setEmail(e.target.value)} />
                <TextField type="password" name="password" variant="outlined" label="Password" fullWidth onChange={e => setPassword(e.target.value )} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Login</Button>
            </form>
            </Paper>
        </Grid>
        </Grid>
        </Container>
    );
}
 
export default Login;