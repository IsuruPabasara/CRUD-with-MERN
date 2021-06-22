import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { getUsers } from '../../actions/users';
import { Grid } from '@material-ui/core';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
 
const Users = () => {
  const [currentId, setCurrentId] = useState(0);
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [currentId, dispatch]);

  const users = useSelector((state) => state.users);
  console.log(users)
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={7}>      
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Grid>
  );
}
export default Users;
