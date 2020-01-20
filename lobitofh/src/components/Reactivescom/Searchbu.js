import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 500,
      backgroundColor: 'white',
      marginTop: '200px',
      marginLeft: '360px'
    },
  },
}));

export default function Searchbu() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
 
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}