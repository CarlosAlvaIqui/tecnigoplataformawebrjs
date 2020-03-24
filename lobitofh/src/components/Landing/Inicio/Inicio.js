import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
//la casualidad de los flojos 

import greatservice from '../../../assets/img/greatservice.png';
import Sistemimg from '../../../assets/img/sistem.png';
import tecnicoico from '../../../assets/img/tecnicoico.png';
import checkgnp from '../../../assets/img/checkpng.png'
import tecnigoicoblanco from '../../../assets/img/icons/logotecnigoblanco2.png'
import logotre from '../../../assets/img/icons/logotre.png'
import { Row, Col } from 'react-bootstrap';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from '../../../utils/axios';
import Registrocard from './formulariosinicio/Registrocard';
import Codeverificationcard from './formulariosinicio/Codeverificationcard'
import Logincard from './formulariosinicio/Logincard';

var des = "Descripcion detallas de las posibles soluciones para este tipo de problemas haciendo enfasis en las posibles para cada uno,claro y directo"







class Registro extends Component {

  state = {
    servicios: [
      { nombre: "Maquina Lenta", descripcion: des, id: 1 },
      { nombre: "Mantenimiento de PC", descripcion: des, id: 2 },
      { nombre: "Recuperacion de Informacion", descripcion: des, id: 3 },
      { nombre: "Instalar Programas", descripcion: des, id: 4 },
      { nombre: "Activar Licencias", descripcion: des, id: 5 },
      { nombre: "Otros", descripcion: des, id: 6 },
    ],
    age: "",
    
    usuario_Nombre : '',
    celular:'',
    correo:'',
    contrasena:'',
    mostrar:true,
  }
  usuariohandler = (e) => this.setState({

    usuario_Nombre: e.target.value
  })
  celularhandler = (e) => this.setState({

    celular: e.target.value
  })
  correohandler = (e) => this.setState({

    correo: e.target.value
  })
  contrasenahandler = (e) => this.setState({

    contrasena: e.target.value
  })

  

  valuefunc = (e) => {
    console.log(this.state.usuario_Nombre)
    var datos = {
      nombre: this.state.usuario_Nombre,
      celular: this.state.celular,
      correo: this.state.correo,
      contrasenia:  this.state.contrasena
     /*
      nombre: "carlosre",
      celular: "+51932091053",
      correo: "ccarlosalvarezz.999@gmail.com",
      contrasenia:  "carlosre4" */
    }
    console.log(datos)
    if(this.state.usuario_Nombre === ""){
        console.log("ingresa algo pues >>>>>")
      this.setState({
        mostrar : false
      })
    }

/*
    e.preventDefault();
    axios({
      method:'post',
      url:'registrar',
      data:this.datos
    }).then(response =>{
        console.log("la respuesta es ", response)
    }).catch(error => {
        console.log("hay error yano quiero vivirs ", error)
    })
*/
}

  changecard =(mostrar) => {
  console.log("se ejecuto el botton" + mostrar )
  this.setState({

    mostrar:mostrar,
  })
  console.log("supdate" + this.state.usuario_Nombre )

}

  render() {
  

    return (
      <React.Fragment>
        <Grid container className="contfrm">
          <Grid item xs={12} sm={8} style={{ marginRight: 20 }}>



          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={this.props.classes.paper}>
              <div className="frmregistro">
                <div style={{paddingRight:40}}>
                <img src={logotre} alt="icolgo" style={{ width: 50 }} />
                <span>
                       <strong>¿En que Podemos ayudarte?</strong>
                </span>
                </div>

               {this.state.mostrar === true?
               /* <Logincard />*/
                <Registrocard
                  mifuncion = {this.changecard}
                />
               :
                <Codeverificationcard />

               }
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

                  <Grid container>
                    <Grid item xs={12} sm={8} >
                      <p className="texttitec">¿Por que contratar <strong>TecniGo?</strong></p>
                      <Row>
                        <Col sm={4}>
                          <Paper className={this.props.classes.paper}>
                            <img src={greatservice} style={{ width: 100 }} alt="excelente servicio" />
                            <p><strong>Contrato Flexible</strong></p>
                          </Paper>
                        </Col>
                        <Col sm={4}>
                          <Paper className={this.props.classes.paper}>
                            <img src={Sistemimg} style={{ width: 100 }} alt="sistema apropiado" />
                            <p><strong>Plataforma de Control</strong></p>
                          </Paper>
                        </Col>
                        <Col sm={4}>
                          <Paper className={this.props.classes.paper}>
                            <img src={tecnicoico} style={{ width: 100 }} alt="tecnico disponible" />
                            <p><strong>Tecnico a tu disposicion</strong></p>
                          </Paper>
                        </Col>
                      </Row>

                    </Grid>

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
                  <Paper className={this.props.classes.paper2}>
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

              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <p className={this.props.classes.titlelist}>
                    <strong>
                      Nuestro Servicios

      </strong>
                  </p>
                </Grid >

                {
                  this.state.servicios.map((servicios, index) => {
                    return (
                      <Grid item xs={12} sm={4} key={servicios.id}>
                        <Paper className={this.props.classes.paper3}>
                          <div >
                            <div>
                              <p className="pservi">
                                <img src={checkgnp} style={{ width: 18 }} className="iconcheck" alt="checkicon" />

                                <strong style={{ fontSize: 18 }}>
                                  {servicios.nombre}
                                </strong>
                              </p>
                            </div>
                            <div style={{ fontSize: 18 }}>
                              {servicios.descripcion}
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  button: {
    backgroundColor: 'red'
  },
  root: {
    flexGrow: 1,

  },
  titlelist: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize: 30
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
    paddingLeft: 20,
    padding: theme.spacing(2),
    paddingBottom: 40,
    paddingRight: 20,
    marginRight: 17,

  },
  textField: {

    width: 320,
    backgroundColor: 'white'
  },

}
))(Registro);


