import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Post from './Post/Post';
import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Posts = ({ setCurrentId, currentId}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid item lg={12}>      
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4} lg={3}>
            <Post post={post} setCurrentId={setCurrentId} currentId={currentId}/>
          </Grid>
        ))}
      </Grid>
      </Grid>
    )
  );
};

export default Posts;

/* const Posts = ({ setCurrentId, currentId}) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid item xs={12} sm={6}>      
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={4}>
            <Post post={post} setCurrentId={setCurrentId} currentId={currentId}/>
          </Grid>
        ))}
      </Grid>
      </Grid>
    )
  );
};


<div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div> */