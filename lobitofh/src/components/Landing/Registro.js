import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import greatservice from '../../assets/img/greatservice.png';
import Sistemimg from '../../assets/img/sistem.png';
import tecnicoico from '../../assets/img/tecnicoico.png';




   var des="Descripcion detallas de las posibles soluciones para este tipo de problemas haciendo enfasis en las posibles para cada uno,claro y directo"

class Registro extends Component {
  state = {
        Services:[
          {nombre:"Maquina Lenta",descripcion:des},
          {nombre:"Mantenimiento de PC",descripcion:des},
          {nombre:"Recuperacion de Informacion",descripcion:des},
          {nombre:"Instalar Programas",descripcion:des},
          {nombre:"Activar Licencias",descripcion:des},
          {nombre:"Otros",descripcion:des},
        ]
  }
  render() {

    return (
      <React.Fragment>
      <Grid  className="contfrm">
          <p className="tituloregistro">TecniGO</p>
          <Grid  className="frmre">
            <Paper className={this.props.classes.paper}>

            <div className={this.props.classes.root}>


<div className="frmregistro">
<p>
Registro

</p>
  <div>
    <p className="spa">Email</p>
    <TextField
      id="outlined-full-width"
      style={{
        margin: 0,
      }}
      placeholder="Correo Electronico"
      fullWidth 
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>

  <div>
    <p className="spa">Nombre</p>
    <TextField
      id="outlined-full-width"
      style={{ margin: 0 }}
      placeholder="Nombre"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
  <div>
    <p className="spa">Contraseña</p>
    <TextField
      id="outlined-full-width"
      style={{ margin: 0 }}
      placeholder="Contraseña"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
  <div>
    <p className="spa">Telefono</p>
    <TextField
      id="outlined-full-width"
      style={{ margin: 0 }}
      placeholder="Telefono"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
 
</div>
</div>
<Button variant="contained" color="secondary">
              Registrese
            </Button>

          </Paper>
        </Grid>
        
      </Grid>


     <div className="contsomething">
       <div>
       <Grid item xs={12} sm={6} className="midiv">
          <Paper className={this.props.classes.paper}>
                <img src={greatservice} style={{width: 100}} alt="excelente servicio"/>
                <p><strong>Contrato Flexible</strong></p>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className="midiv">
          <Paper className={this.props.classes.paper}>
          <img src={Sistemimg} style={{width: 100}} alt="sistema apropiado"/>
          <p><strong>Plataforma de Control</strong></p>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} className="midiv">
          <Paper className={this.props.classes.paper}>
          <img src={tecnicoico} style={{width: 100}} alt="tecnico disponible"/>
            <p><strong>Tecnico a tu disposicion</strong></p>
          </Paper>
        </Grid>
        {
          /*
          <div className="midiv">
         paddingLeft
       </div>
       <div className="midiv">
         paddingLeft
       </div>
       <div className="midiv">
         paddingLeft
       </div>
       <div className="midiv">
         paddingLeft
       </div> */
        }
       </div>
       
     </div>

      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography component="div" style={{ backgroundColor: 'white' }}>
        <Grid container spacing={3}>
        <Grid item xs={12}>
                   <p className={this.props.classes.titlelist}>
                  <strong>
                  Nuestra Plataforma
                  </strong>
                    </p>
        </Grid>
                <Grid item xs={12} sm={6} className="plataformagrid">
                  <Paper  className={this.props.classes.paper2}>
                    <div>
                      <p className="simplepmp">
                          <strong>
                          La Mejor Plataforma para Gestionar el Servicio
                          </strong>
                      </p>
                    </div>
                      <div>
                      <ul>
                        <li><p className="simplepmp">Concentrando todas las solicitudes en un solo Lugar</p></li>
                        <li><p className="simplepmp">Respuesta record en menos de 5 minutos</p></li>
                        <li><p className="simplepmp">Soluciones Remotas</p></li>
                        <li><p className="simplepmp">Seguimiento y agenda de todos los trabajos pedidos</p></li>
                        <li><p className="simplepmp">Reporte con informacion Completa</p></li>
                      </ul>
                        </div>

                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6} className="plataformagrid">
                     <Paper className={this.props.classes.paper}>xs=6 sm=3</Paper>
                </Grid>

                </Grid>
            </Typography>
      </Container>


      <CssBaseline />
      <Container maxWidth="lg" className="plataformagrid">
        <Typography component="div" style={{ backgroundColor: 'white' }}>

        <Grid container spacing={5} >
        <Grid item xs={12}>
        <p className={this.props.classes.titlelist}>
          <strong>
          Nuestro Servicios

          </strong>
       </p>
        </Grid >
          {
              this.state.Services.map((Services,itemsl) =>{
                return(
                <Grid key={itemsl} item xs={12} sm={4} >
                  <Paper  className={this.props.classes.paper3}>
                      <div >
                            <div>
                            <p className="pservi">
                              <strong>
                              {Services.nombre}
                              </strong>
                            </p>
                            </div>
                            <div>
                              {Services.descripcion}
                            </div>
                      </div>
                  </Paper>
                </Grid>
                )
              })

          }
                
                
            

          </Grid>
             
         </Typography>
       </Container>  


    
      </React.Fragment>
    )
  }
}

export default withStyles(theme => ({
  button: {
    backgroundColor: 'red'
  },
  root: {
    flexGrow: 1,

  },
  titlelist:{
    padding: theme.spacing(2),
    textAlign: 'center',
    marginTop:40,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  paper3: {
    paddingLeft:50,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  textField: {

    width: 320,
    backgroundColor: 'white'
  },

})
)(Registro);


