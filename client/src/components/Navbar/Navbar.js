import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Hello There!
        </Typography>
        <Button color="inherit" onClick={handleOpen}>
          Signup
        </Button>
        <Button color="inherit" onClick={handleOpen}>
          Signin
        </Button>
        <Button color="inherit" onClick={handleOpen}>
          User Details
        </Button>
        <Button color="inherit" onClick={handleOpen}>
          Components
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;