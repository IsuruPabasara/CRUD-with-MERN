import React, {useState, useEffect, Component, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import UserContext from '../context/userContext';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Header from './Auth/AuthOptions';
import AllPosts from './AllPosts';
import axios from 'axios';

function Home() {
  
const {userData,setUserData} = useContext(UserContext);


useEffect(() => {
  const checkLoggedIn = async () => {
    let token = localStorage.getItem("authToken");
    if(token === null){
      localStorage.setItem("authToken", "");
      token = "";
    }
    const tokenResponse = await axios.post('http://localhost:5000/users/tokenIsValid', null, {headers: {"authToken": token}});
    if (tokenResponse.data) {
      const userRes = await axios.get("http://localhost:5000/users/", {
        headers: { "authToken": token },
      });
      setUserData({
        token: token,
        user: userRes.data,
      });
    }
  }
  checkLoggedIn();
}, []);

const PrivateRoute = () => (
    userData.user ?
    <Route path="/posts" component={AllPosts} />:<Redirect to="/login"/>
)

userData.user?console.log("true"):console.log("false")
return (
    <BrowserRouter>
        <Header />
        <Switch>
          <PrivateRoute component={AllPosts} path="/posts"/>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Redirect from='*' to='/login' />
        </Switch>
    </BrowserRouter>
  );
}

export default Home;