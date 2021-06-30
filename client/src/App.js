import React, {useState, useEffect, Component, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom';
import axios from 'axios';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import UserContext from './context/userContext';
import Header from './components/Auth/AuthOptions';
import AllPosts from './components/AllPosts';
import Home from './components/Home';

function App() {
  
  const [ userData, setUserData] = useState({
    token: undefined,
    user: undefined
  });
  
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
    <Home/>
    </UserContext.Provider>
 
  );
  
}

export default App;

