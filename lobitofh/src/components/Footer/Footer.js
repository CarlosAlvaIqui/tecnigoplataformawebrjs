import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Listitems from '../Reactivescom/listitems';
import Cartas from '../Reactivescom/Cartas';

import fbicon from '../../assets/img/icons/fbicon.png'
import instaicon from '../../assets/img/icons/instaicon.png';
import linkicon from '../../assets/img/icons/linkicon.png';
import twittion from '../../assets/img/icons/twitticon.png';
import youtuicon from '../../assets/img/icons/youtuico.png';
import googleandapple from '../../assets/img/googleandapple.png';
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
      <Grid container spacing={3} className="footerstyle">
       {/**
        *  <Grid item xs>
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
        */}
        <Grid item xs={12} sm={9}>
            <div>
            <p className="Footertiitle">TecniGo</p>

            </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>

                <img src={fbicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={instaicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={youtuicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={twittion} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={linkicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>

          </div>
        </Grid>
        <Grid item xs={12} sm={8} >
            <div className="nomeclatura">
                    <span className="descripcionfoo bh">
                      Copiright 2020 Tecnigo |
                    </span>
                    <span className="descripcionfoo">
                      Terminos y Condicciones |
                    </span>
                    <span className="descripcionfoo">
                      Terminos para Profesionales |
                    </span>
                    <span className="descripcionfoo">
                      Privacidad 
                    </span>
            </div>
        </Grid>
        <Grid item xs={12} sm={4} >
         {/*
          <div className="secondfo">
          <img src={googleandapple} alt="plat_googleapple" style={{ width:420}}/>

          </div>
            
         */}
        </Grid>
      </Grid>
 
    </div>
  );
}