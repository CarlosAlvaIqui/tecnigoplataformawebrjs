import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'react';
import {CssBaseline,Typography,Container,Card,CardActionArea,CardActions,CardContent,CardMedia } from '@material-ui/core';
import Cartthings from '../Reactivescom/Cartthings';
import GridContainer from '../Grid/GridContainer';
import imgbg from '../../assets/img/as.jpg';
import Searchbu from '../Reactivescom/Searchbu';
import GridItem from '../Grid/GridItem';
import Particles from 'react-particles-js';
import Exradiusimg from '../Reactivescom/Exradiusimg'; 
import cssgeneral from '../../assets/css/cssgeneral.css'

const useStyles = makeStyles({
    contaninerimg : {
        background: `url(${imgbg}) no-repeat center top`,
    }
})

export default function Landing(){
    const classes = useStyles();
return(
    <React.Fragment>
    <CssBaseline />
    <Container maxwidth="xs" >
        
      <Typography component="div" style={{  height: '75vh'  }} className='morio'>
      <h1>Tecnigo</h1>
      <Searchbu />
        <GridContainer style={{marginLeft: "60px"}}>

                <Exradiusimg />
                <Exradiusimg />
                <Exradiusimg />
                <Exradiusimg />
                <Exradiusimg />


        </GridContainer>

            <canvas>
            <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 7
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
            </canvas>
      </Typography>
      
    </Container>

    <GridContainer style={{marginLeft: "60px"}}>

            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>

    </GridContainer>

    <GridContainer style={{marginLeft: "60px"}}>

            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>

    </GridContainer>

    <GridContainer style={{marginLeft: "60px"}}>

            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>
            <Cartthings/>

        </GridContainer>

    </React.Fragment>
    )

    }