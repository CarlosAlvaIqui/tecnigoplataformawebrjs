import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import imgb from '../../assets/img/aimage.png';
import { Link, NavLink } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import cssgeneral from '../../assets/css/cssgeneral.css'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { red } from '@material-ui/core/colors';



class Serviceslanding extends Component {
  state = {
    servicios: [
      //      { nombre: 'Pc lenta', image: imgb, preg: [{pregunta1: 'aea'},{pregunta2: 'gaa'}, {pregunta3: 'mongol'} ] },

      { nombre: 'Pc lenta', image: imgb, preg: 1 },
      { nombre: 'Recuperar I.', image: imgb, preg: 2 },
      { nombre: 'Licencia', image: imgb, preg: 3 },
      { nombre: 'Impresora', image: imgb, preg: 4 },
      { nombre: 'Virus', image: imgb, preg: 5 },
      { nombre: 'Internet', image: imgb, preg: 6 },
      { nombre: 'No Responde ', image: imgb, preg: 7 },
      { nombre: 'Instalacion ', image: imgb, preg: 8 },
      { nombre: 'Limpieza', image: imgb, preg: 9 },
      { nombre: 'Saturacion', image: imgb, preg: 10 },


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
          <Typography component="div"  >
            <div className={this.props.classes.root}>
              <Grid container spacing={3}>
                {
                  console.log(this.state.servicios)

                }
                {

                  this.state.servicios.map((servicios, i) => {

                    return (
                      <Grid item xs={5} sm={2} key={i} className="modalappe">
                          <div className={this.props.classes.paper}>
                          <Link className="nav-bar-brand" to={{ pathname: '/Details', aboutprops: { preguntas: servicios.preg } }}>

                            <img src={servicios.image} className="miradio" width="80" />

                           <p className="spancss">{servicios.nombre}</p>
                            </Link>

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

      </React.Fragment>


    )
  }
}


export default withStyles(theme => ({
  root: {
    flexGrow: 1,
    background:red,

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
  nika:{
    width: 200
  }

}))(Serviceslanding)