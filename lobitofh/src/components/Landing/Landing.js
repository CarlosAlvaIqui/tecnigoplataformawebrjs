import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Text from 'react';
import {CssBaseline,Typography,Container,Card,CardActionArea,CardActions,CardContent,CardMedia,Modal,Paper  } from '@material-ui/core';
import GridContainer from '../Grid/GridContainer';
import imgbg from '../../assets/img/as.jpg';
import GridItem from '../Grid/GridItem';
import Particles from 'react-particles-js';
import Exradiusimg from '../Reactivescom/Exradiusimg'; 
import cssgeneral from '../../assets/css/cssgeneral.css';

import Grid from '@material-ui/core/Grid';

import Modals from '../Reactivescom/Modals';

const useStyles = makeStyles({
    contaninerimg : {
        background: `url(${imgbg}) no-repeat center top`,
    }
    
})


export default function Landing(){
    const classes = useStyles();
    const Servicios = (props) =>( 
    <p>Servicio{props.name}</p>
   
    );

 
    const ChildComponent = (props) => {  
        return <p>{props.text}</p>; 
      };
      
      var solicitudes = [{titulo:"pclenta", dinero: "10"},{titulo:"virus", dinero: "2"}] ;
      
  /*
   {
          solicitudes.map((solicitudes, i) => {
            return (
              <p>
                {solicitudes.titulo}
              </p>
            )
          })
        }
  */  
return(
 
    <React.Fragment>
    <CssBaseline />
    <Container maxwidth="xs" >
        
      <Typography component="div" style={{  height: '75vh'  }} className='morio'>
      <div >
      <h1 className="ttl1">TecniGO</h1>
      <p className="sctitle">Resolvemos tus problemas tecnico desde tu hogar </p>
        
       

        <GridContainer className="modalappe" style={{marginLeft: "190px"}}>
        <Modals />
        <Modals />
        <Modals />
        <Modals />
        <Modals />


        </GridContainer>
        <GridContainer className="modalappe" style={{marginLeft: "190px"}}>
        <Modals />
        <Modals />
        <Modals />
        <Modals />
        <Modals />


        </GridContainer>


      </div>
      </Typography>
      
    </Container>
    <Grid container spacing={3}>
        <Grid item xs={12}>
          
          
        </Grid>
        </Grid>
    <div>

    </div>
    </React.Fragment>
    )

    }