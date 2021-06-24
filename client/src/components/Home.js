import React, { useEffect, useContext, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import UserContext from '../context/userContext';
import Posts from './Posts/Posts';
import Form from './Form/Form';

import { Container, Grow, Grid } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';


function Home () {
    const {userData} = useContext(UserContext);
    const history = useHistory();
    
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);


    useEffect(() => {
        if(!userData.user)
            history.push("/login");

    }, []);
    return (
        <div>
            {userData.user ? (
                <Container>
                <Grow in>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Posts setCurrentId={setCurrentId} />
                    <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
                </Grow>
                </Container>
            ) : (
                <>
                    <h2>You are not logged in</h2>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
}
 
export default Home;