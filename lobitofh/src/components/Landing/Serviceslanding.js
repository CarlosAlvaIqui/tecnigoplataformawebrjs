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
import Moucopy from '../Reactivescom/Moucopy';
import Mou2 from '../Reactivescom/Mou2';
import Carrouselcard from '../Reactivescom/Carrouselcard';
import Mapaeje from '../Reactivescom/Mapaeje';
import Popupnewdireccion from '../Reactivescom/Popupnewdireccion';

import credentials from '../Reactivescom/credentials';
import Modalmap from '../Reactivescom/Modalmap';

import axios from '../../utils/axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import RoomIcon from '@material-ui/icons/Room';
import { green } from '@material-ui/core/colors';




import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import {Row,Col} from 'react-bootstrap';



class Serviceslanding extends Component {

componentDidMount(){

        axios({
          method:'get',
          url:`servicio/lista/`,
          headers:{
            Authorization: `Bearer `+localStorage.getItem('tokenuser')
          }
        }).then(response =>{
          console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")
          console.log(response)
          var almacendata = response.data
          console.log(almacendata)

                if(almacendata){
                  this.setState({
                    serviciosapi : almacendata
                  })
                }else{
                    console.log("error api")
                }

          var xusertonken = localStorage.getItem("tokenuser")
            console.log("usuario token >>>>>>>"+ xusertonken)
          //window.location.href='/Serviceslanding'

        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })

//esta se ejecuta cuando el componente se muesta
        var getactualuser = localStorage.getItem('data_user')
        var actualuser = JSON.parse(getactualuser).data.cod
        axios({
          method:'get',
          url:`direcciones/${actualuser}`,
          headers:{
            Authorization: `Bearer `+localStorage.getItem('tokenuser')
          }
        }).then(response =>{
          console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<RESPUESTA DIRECCIONES DEL USUARIO")
          console.log(response.data)
          var almacenadirecciones = response.data
          this.setState({
            direccion_usuario : almacenadirecciones
          })
        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })


}

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


    ],
    serviciosapi: [

    ],
    seccion_preguntas : [

    ],
    direccion_usuario : [

    ],
    
    showmodal: false,
    age: '',
    descripcion : ''
  }

handlequestion  (serviciosa) {
  console.log("ohh shit here we go again" + serviciosa.nombre)
  var detaildata = {
    cod: serviciosa.cod,
    nombre: serviciosa.nombre,
    imgNombre:serviciosa.imgNombre,
    precio:serviciosa.precio
  }
  console.log(detaildata)
  this.setState({
    showmodal : true
  })
        axios({
          method:'post',
          url:`servicio/detalle/`,
          headers:{
            Authorization: `Bearer `+localStorage.getItem('tokenuser')
          },
          data: detaildata
        }).then(response =>{
          console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")
          console.log(response)
          var alamacenpreguntas = response.data
          console.log(alamacenpreguntas)
        
          if(alamacenpreguntas){
            this.setState({
              seccion_preguntas : alamacenpreguntas
            })
          }else{
              console.log("error api")
          }


        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })


}

passproptofalse = () => {
this.setState({
  showmodal : false

})
}

updatedirecciones = (almacenadirecciones,execute) => {
  console.log("la variable x es :", execute)
  
  
  if(execute == true){
    console.log("ENTRASTES POR FIN")
    this.setState({
      
    direccion_usuario : almacenadirecciones
      
      
      })
  }

}


 handleChange = (e) => {
this.setState({
age : e.target.value
})
console.log(this.state.age)

}

onclickeventoleetsee = () => {
  console.log("bota tu gaaaaaaaaaaaaaaaaaaaa")
}

getdesdireccion = (direcciones) =>{
  console.log("Se dio click >>>>>>>>>>>>>>>>>>>>><<><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
  console.log(direcciones)
  var referencia = direcciones.referencia
  this.setState({
    descripcion : referencia
  })
}

  render() {
 console.log("agas  "+ this.state.serviciosapi  )
 console.log("agas  "+ this.state.servicios  )
 console.log("agas  "+ this.state.seccion_preguntas  )
 console.log("agas  "+ this.state.direccion_usuario  )

    return (

      <React.Fragment>
        <Box color="text.primary" className='bback'>


          <div className="zawardo">
          <Row>
           
              <Col  sm={3}>
                  <FormControl className={this.props.classes.formControl}>
                    <InputLabel id="demo-simple-select-label" style={{color:'white'}}>Direcciones</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={this.state.age}
                      onChange={this.handleChange}
                      style={{color:'white'}}
                      onClick={this.onclickeventoleetsee}
                      
                    >
                      {
                        this.state.direccion_usuario.map((direcciones, index)=> {
                            return(
                              <MenuItem key={index} value={direcciones.cod} >
                                <span onClick={() => this.getdesdireccion(direcciones)}>{direcciones.nombre}</span>
                                
                              </MenuItem>

                            )
                        })
                      }
                    </Select>
                  </FormControl>
                    <p style={{color:'white'}}>{this.state.descripcion}</p>

              </Col>
          </Row>
          <Modalmap 
              updatedirecciones = {this.updatedirecciones}

      />
        

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
                                    (this.state.serviciosapi).length == 0  ?
                                  
                                 <div style={{textAlign:'center',alignContent:'center'}}>
                                        <CircularProgress />
                                 </div>

                                        
                                    :
                                    this.state.serviciosapi.map((serviciosa, i) => {
//para las imagenes hacer un array de imagenes por mientras y q las recorra
//consejo a mejorar creo q solo devemos llamar solo un modal y de ai hacer consulta
                                      return (

                                        <Grid key={i} className="nika" >
                        
                                            <div className={this.props.classes.paper}>
                                            <img src={imgb} className="miradio" width="90" alt="servicios tecnigo"/>

                                      <p onClick={() => this.handlequestion(serviciosa)} style={{color:'white'}}>{serviciosa.nombre}</p>
                         
                                            </div>
                                        </Grid>

                               
                                        
                                      )
                                      })
                
                          }
                            <Moucopy 
                             changepl = {this.state.showmodal}
                             valfalse = {this.passproptofalse}
                            questions = {this.state.seccion_preguntas}
                            />
                     
    
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
        

      <br />
      <br />
      <br />

      <Popupnewdireccion 
        showmodal = {this.state.showmodal}
        passproptofalse = {this.passproptofalse}
        direccion_usuario = {this.state.direccion_usuario}
      />
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  

}))(Serviceslanding)