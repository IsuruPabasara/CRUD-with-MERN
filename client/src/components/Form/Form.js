import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Grid, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Dialog, DialogTitle, DialogContent, makeStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId, open, setOpen, title}) => {
  const [postData, setPostData] = useState({ creator: '', title: '', status: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  
  const dispatch = useDispatch();
  
  const classes = useStyles();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ creator: '', title: '', status: ''});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createPost(postData));
      clear();
    } else {
      dispatch(updatePost(currentId, postData));
      clear();
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} maxWidth="sm" classes={{ paper: classes.dialogWrapper }}>
        <DialogTitle>
            <div style={{ display: 'flex' }}>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                  {title}
                </Typography>
                <Button
                    color="secondary"
                    onClick={()=>{setOpen(false)}}>
                    <CloseIcon />
                </Button>
            </div>
        </DialogTitle>
        <DialogContent dividers>
          <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
          <TextField name="component" variant="outlined" label="Component" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
          <TextField name="status" variant="outlined" label="Status" fullWidth value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })} />
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" onClick={handleSubmit} fullWidth>Submit</Button>
          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={clear} fullWidth>Clear</Button>
        </DialogContent>
    </Dialog>
  );
};

export default Form;


{/* <Grid item xs={12} sm={4}>
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${post.title}"` : 'Create a Component'}</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField name="component" variant="outlined" label="Component" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="status" variant="outlined" label="Status" fullWidth value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
    </Grid> 

    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle>
                <div style={{ display: 'flex' }}>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                      {`${classes.root} ${classes.form}`}
                    </Typography>
                    <Button
                        color="secondary"
                        onClick={()=>{setOpenPopup(false)}}>
                        <CloseIcon />
                    </Button>
                </div>
            </DialogTitle>
            <DialogContent dividers>
              <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
              <TextField name="component" variant="outlined" label="Component" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
              <TextField name="status" variant="outlined" label="Status" fullWidth value={postData.status} onChange={(e) => setPostData({ ...postData, status: e.target.value })} />
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
              <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={clear} fullWidth>Clear</Button>
            </DialogContent>
        </Dialog>*/}