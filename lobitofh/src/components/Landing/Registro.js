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
import checkgnp from '../../assets/img/checkpng.png'

import logotre from '../../assets/img/icons/logotre.png'


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
      <img src={logotre} alt="icolgo" style={{width:50}}/>
    <span>
    ¿En que Podemos ayudarte?

    </span>
    
    <div className="contformulariotecnico2">

                <div>
                <br/>

                <TextField id="input-with-icon-grid" label="Nombre " fullWidth/>

                </div>

                <div>
                <br/>
                <TextField id="input-with-icon-grid" label="Celular" fullWidth/>

                </div>

                <div>
                <br/>
                <TextField id="input-with-icon-grid" label="Correo" fullWidth/>

                </div>

                <div>
                <br/>
                <TextField id="input-with-icon-grid" label="Contraseña" fullWidth/>

                </div>
                <br/>

                <div>
                
                <TextField id="input-with-icon-grid" label="Maquina Lenta" fullWidth/>

                </div>
                <br/>

                <div>
                <TextField id="input-with-icon-grid" label="Mensaje" fullWidth/>

                </div>
                <br/>


                <Button variant="contained" color="secondary">
                    Enviar
                </Button>
                </div>
</div>
</div>

          </Paper>
        </Grid>
        
      </Grid>


      <div className="fonditox">
      <CssBaseline />
      <Container maxWidth="lg" >
        <Typography component="div" style={{ backgroundColor: 'white' }}>
          
     <div className="contsomething">
       <div>
       <p className="texttitec">¿Por que contratar <strong>TecniGo?</strong></p>

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
     
       </div>
       
     </div>

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
                        <li className="listasimple"><span className="simplepmp">Concentrando todas las solicitudes en un solo Lugar</span></li>
                        <li className="listasimple"><span className="simplepmp">Respuesta record en menos de 5 minutos</span></li>
                        <li className="listasimple"><span className="simplepmp">Soluciones Remotas</span></li>
                        <li className="listasimple"><span className="simplepmp">Seguimiento y agenda de todos los trabajos pedidos</span></li>
                        <li className="listasimple"><span className="simplepmp">Reporte con informacion Completa</span></li>
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
                            <img src={checkgnp} style={{width: 18}} className="iconcheck" alt="checkicon"/>

                              <strong style={{fontSize:18}}>
                              {Services.nombre}
                              </strong>
                            </p>
                            </div>
                            <div style={{fontSize:18}}>
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
      </div>


    
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
    fontSize:30
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
    paddingLeft:20,
    padding: theme.spacing(2),
    paddingBottom: 40,
    paddingRight:20,
    marginRight:17,
    
  },
  textField: {

    width: 320,
    backgroundColor: 'white'
  },

})
)(Registro);


