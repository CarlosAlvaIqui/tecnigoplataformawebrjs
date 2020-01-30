import React, {Component} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modals from '../Reactivescom/Modals';
import GridContainer from '../Grid/GridContainer';
import {CssBaseline,Typography,Container,Card,CardActionArea,CardActions,CardContent,CardMedia,Modal  } from '@material-ui/core';
import imgbg from '../../assets/img/as.jpg';



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

  export default function FullWidthGrid() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}></Paper>
          </Grid>
          
        </Grid>
      </div>
    );
  }