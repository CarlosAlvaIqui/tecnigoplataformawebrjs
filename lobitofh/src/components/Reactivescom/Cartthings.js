import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imgbg from '../../assets/img/as.jpg'
import Litleckb from '../Reactivescom/Litleckb';

import {CssBaseline,Typography,Container,Card,CardActionArea,CardActions,CardContent,CardMedia,Button } from '@material-ui/core';
const useStyles = makeStyles({
    card: {
      maxWidth: 170,
      marginLeft: '93px',
    },
 
  });
  export default function Cartthings() {
    const classes = useStyles();
  
    return (
      <Card className={classes.card}>
        <CardActionArea className={classes.marginLeft}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image={imgbg}
            title="Contemplative Reptile"
          />
          <CardContent>

           <Litleckb />

          </CardContent>
        </CardActionArea>

      </Card>
    );
  }
  