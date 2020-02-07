import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Detailswork = (props) =>{
    const classes = useStyles();

    return(
        <div className="tecgofon">
        <Grid container spacing={3}>
          <Grid item xs={12}>
          <p className="tittletec">
                TecniGO
              </p>
          </Grid>
         
        </Grid>
      </div>
    )
}

export default Detailswork;