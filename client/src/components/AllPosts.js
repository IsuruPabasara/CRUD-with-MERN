import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/userContext';
import Posts from './Posts/Posts';
import Form from './Form/Form';
import AddIcon from '@material-ui/icons/Add';
import { Container, Grow, Grid, Button } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import { getPosts } from '../actions/posts';

function AllPosts() {
const {userData,setUserData} = useContext(UserContext);
const [open, setOpen] = useState(false);
const [currentId, setCurrentId] = useState(0);
const dispatch = useDispatch();

useEffect(() => {
    dispatch(getPosts());
}, [currentId, dispatch]);

const handleClickOpen = () => {
    setOpen(true);
  };

console.log("Allposts")
console.log(userData)
      
  

return(
    <div>
        <Container>
        <br></br>
        <Button color="primary" onClick={handleClickOpen}> <AddIcon/> Add a new entry</Button>
        <br></br><br></br>
        <Grow in>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Posts setCurrentId={setCurrentId} currentId={currentId}/>
            <Form  open={open} setOpen={setOpen} currentId={currentId} setCurrentId={setCurrentId} title="Add entry"/>
        </Grid>
        </Grow>
        </Container>
    </div>
)
}

export default AllPosts;


