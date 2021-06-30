import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import routerImg from '../../../images/image.jpeg';
import { deletePost } from '../../../actions/posts';
import useStyles from './styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Form from '../../Form/Form';
import { useState } from 'react';
import Popup from '../../PopUpForm/PopUpForm';

const Post = ({ post, setCurrentId, currentId}) => {
  const [openPopup, setOpenPopup] = useState(false)
  const [open, setOpen] = useState(false);
  
  const dispatch = useDispatch();
  
  const classes = useStyles();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDel =()=>{
    dispatch(deletePost(post._id))
    setOpen(false);
  }

  const openInPopup = () => {
    setCurrentId(post._id)
    setOpenPopup(true)
  }

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={routerImg} title={post.title} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={openInPopup}><MoreHorizIcon fontSize="default" /></Button>
        <Form  open={openPopup} setOpen={setOpenPopup} setCurrentId={setCurrentId} currentId={currentId} title="Edit entry"/>
      </div>
      <Typography className={classes.title} gutterBottom variant="h6" component="h3">{post.title}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.status}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>

        <Button size="small" color="primary" onClick={handleClickOpen}><DeleteIcon fontSize="small" /> Remove</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Delete component</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this component?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDel} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      </CardActions>
    </Card>
  );
};

export default Post;
