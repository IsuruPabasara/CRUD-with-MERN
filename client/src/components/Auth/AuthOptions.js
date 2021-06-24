import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from "../../context/userContext";
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function AuthOptions () {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();
    const register = () => history.push("/register");
    const login = () => history.push("/login");
    
    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem("auth-token","");
    };

    
    return (
        <AppBar position="static"> 
            {userData.user ? 
            (
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Hello There!
                </Typography>
                <Button href="/" color="inherit" onClick={logout}>
                Logout
                </Button>
            </Toolbar>
            ) : (
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                Please sign in or register
                </Typography>
                <Button href="/register" color="inherit" onClick={register}>
                Sign up
                </Button>
                <Button href="/login" color="inherit" onClick={login}>
                Login
                </Button>
            </Toolbar>
            )}
        </AppBar>
        
    )
    
}




export default AuthOptions;
