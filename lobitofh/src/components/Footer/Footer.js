import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Listitems from '../Reactivescom/listitems';
import Cartas from '../Reactivescom/Cartas';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  boot:{
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
              <Cartas />
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>
              <Listitems />
              </Paper>
        
        </Grid>
      </Grid>
 
    </div>
  );
}