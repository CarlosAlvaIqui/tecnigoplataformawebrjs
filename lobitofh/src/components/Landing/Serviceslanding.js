import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import imgb from '../../assets/img/aimage.png';
import { Link } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import '../../assets/css/cssgeneral.css';

import { red } from '@material-ui/core/colors';
import Mou from '../Reactivescom/Mou';
import Mou2 from '../Reactivescom/Mou2';
import Carrouselcard from '../Reactivescom/Carrouselcard';
import Mapaeje from '../Reactivescom/Mapaeje';
import Popupnewdireccion from '../Reactivescom/Popupnewdireccion';

import credentials from '../Reactivescom/credentials';
import Modalmap from '../Reactivescom/Modalmap';

class Serviceslanding extends Component {



  state = {
    servicios: [
      //      { nombre: 'Pc lenta', image: imgb, preg: [{pregunta1: 'aea'},{pregunta2: 'gaa'}, {pregunta3: 'mongol'} ] },

      { nombre: 'Maquina lenta', image: imgb, preg: 1 },
      { nombre: 'Recuperar I.', image: imgb, preg: 2 },
      { nombre: 'A. Licencia', image: imgb, preg: 3 },
      { nombre: 'P. Impresora', image: imgb, preg: 4 },
      { nombre: 'P. Virus', image: imgb, preg: 5 },
      { nombre: 'Internet Lento', image: imgb, preg: 6 },
      { nombre: 'Pc no Enciende', image: imgb, preg: 7 },
      { nombre: 'Ins. Programas', image: imgb, preg: 8 },
      { nombre: 'Mantenimiento', image: imgb, preg: 9 },
      { nombre: 'Correo LLeno', image: imgb, preg: 10 },


    ]
  }


  
  render() {
 
    return (

      <React.Fragment>
        <Box color="text.primary" className='bback'>
          <div className="zawardo">
          <p className="ttservice">TecniGO</p>
          <p className="spantextp">Resolvemos tus problemas tecnicos desde tu hogar</p>
        
        <CssBaseline />
        <Container maxWidth="md">
          <Typography component="div"  style={{  }}>
            <div className={this.props.classes.root}>
              <Grid container spacing={3}>
                {
                  console.log(this.state.servicios)
                }
                {

                  this.state.servicios.map((servicios, i) => {

                    return (
                      <Grid    key={i} className="nika" >
                        
                          <div className={this.props.classes.paper}>
                          <Link className="nav-bar-brand" to={{ pathname: '/Details', aboutprops: { preguntas: servicios.preg } }}>

                            <img src={servicios.image} className="miradio" width="90" alt="servicios tecnigo"/>
                            </Link>
                          {
                            /**
                             * <p className="spancss">{servicios.nombre}</p>
                             */
                          } 
                            <Mou 
                            nombre_problema={servicios.nombre}
                            id_pregunta={servicios.preg}
                            />

                            {
                              /**
                               *   <Mou2 
                            ninoni={servicios.nombre}
                            algo={servicios.preg}
                            />
                               */
                            }
                          
                         

                          </div>

                      
                      </Grid>
                      
                    )
                  })

                }
              
              </Grid>
            </div>
          </Typography>
        </Container>
        </div>
        </Box>
        <Carrouselcard />
        {/*
             <Popupmap
     googleMapURL="https://maps.googleapis.com/maps/api/js?key="
     containerElement= {<div style={{height: '400px'}}></div>}
     mapElement={<div style={{height:'100%'}} />}
     loadingElement={<p>Cargando.....</p>}

        */}
        
      <Modalmap />
      <br />
      <br />
      <br />

      <Popupnewdireccion />
      <br />
      <br />
      <br />

      </React.Fragment>


    )
  }
}


export default withStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    
    color: theme.palette.text.secondary,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper2: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  

}))(Serviceslanding)