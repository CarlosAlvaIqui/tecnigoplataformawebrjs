import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import fbicon from '../../assets/img/icons/fbicon.png'
import instaicon from '../../assets/img/icons/instaicon.png';
import linkicon from '../../assets/img/icons/linkicon.png';
import twittion from '../../assets/img/icons/twitticon.png';
import youtuicon from '../../assets/img/icons/youtuico.png';

import applestroic from '../../assets/img/icons/iconoapple.png';
import googleplayico from '../../assets/img/icons/google-play-badge.png';
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
       
        <Grid item xs={12} sm={9}>
            <div>
            <p className="Footertiitle">TecniGo</p>

            </div>
        </Grid>
        <Grid item xs={12} sm={3}>
          <div>

                <img src={fbicon} style={{ width: 30}} alt="socialredicon" className="fri"/>
                <img src={instaicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={youtuicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={twittion} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>
                <img src={linkicon} style={{ width: 30}} alt="socialredicon" className="iconfoo"/>

          </div>
        </Grid>
        <Grid item xs={12} sm={8} className="contfots">
            <div className="nomeclatura">
                    <span className="descripcionf">
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
        <Grid item xs={12} sm={4} className="secondfo">
         {/*
          <div className="secondfo">
          <img src={googleandapple} alt="plat_googleapple" style={{ width:420}}/>

          </div>
            
         */}

         <img src={googleplayico} width="140" alt="iconodegooglplay"/>
        <img src={applestroic} width="140" alt="iconoapple"/>
        </Grid>
      </Grid>
 
    </div>
  );
}