import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import Signin from './components/Signin/Signin';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar'
import Users from './components/Users/Users';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const [currentIdUser, setCurrentIdUser] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  const dispatchUser = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <Navbar/><br></br>      
      <Grow in>
        <Container>
            <Router>
              <Switch>
                <Route exact path='/' component={()=>(
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Users/>
                    <Signin currentIdUser={currentIdUser} setCurrentIdUser={setCurrentIdUser}/>
                  </Grid>)}
                />
                <Route path= '/components' component={()=>(
                  <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Posts/>
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                  </Grid>)}
                />
              </Switch>
            </Router>
        </Container>
      </Grow>
      <br></br>
          
    </Container>
  );
};

export default App;