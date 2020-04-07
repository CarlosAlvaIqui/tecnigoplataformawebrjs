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

import recuperarinfor from '../../assets/img/icons/servicios/floppydisk.png';
import licencia from '../../assets/img/icons/servicios/licencia.png'
import impresora from '../../assets/img/icons/servicios/impresora.png'
import virus from '../../assets/img/icons/servicios/virucito2.png'
import correo from '../../assets/img/icons/servicios/mail.png'
import internet from '../../assets/img/icons/servicios/internet2.png'
import pcnoenciende from '../../assets/img/icons/servicios/pcnoenciende2.jpg'
import install from '../../assets/img/icons/servicios/driver2.png'
import mantenimiento from '../../assets/img/icons/servicios/mante2.png'


var arraimages = [imgb,recuperarinfor,licencia,impresora,virus,correo,internet,pcnoenciende,install,mantenimiento]
const dataservicio = {
  cod: 0,
   nombre: '',
    imgnombre: '',
     precio: 0,
}

class Serviceslanding extends Component {

componentDidMount(){

        axios({
          method:'get',
          url:`servicio/lista/`,
          headers:{
            Authorization: `Bearer `+localStorage.getItem('tokenuser')
          }
        }).then(response =>{
          {/**console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")
          console.log(response)
                  console.log(almacendata)
                              console.log("usuario token >>>>>>>"+ xusertonken)

 */}
          
          var almacendata = response.data

                if(almacendata){
                  this.setState({
                    serviciosapi : almacendata
                  })
                }else{
                    console.log("error api")
                }

          var xusertonken = localStorage.getItem("tokenuser")
          //window.location.href='/Serviceslanding'

        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })

        var getactualuser = localStorage.getItem('data_user')
        var actualuser = JSON.parse(getactualuser).data.cod
        axios({
          method:'get',
          url:`direcciones/${actualuser}`,
          headers:{
            Authorization: `Bearer `+localStorage.getItem('tokenuser')
          }
        }).then(response =>{
         // console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<RESPUESTA DIRECCIONES DEL USUARIO")
          //console.log(response.data)
          var almacenadirecciones = response.data
          this.setState({
            direccion_usuario : almacenadirecciones
          })
        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })


}
constructor(props) {
  super(props);
  this.state = {  
    serviciosapi: [

    ],
    seccion_preguntas : [

    ],
    direccion_usuario : [

    ],
    
    showmodal: false,
    descripcion : '',
    servicio_escojido :  dataservicio,
    nombrecodigo : '',
    cod_direccion : '',
    mesajeespera : false

  }
  var gettokenuser = localStorage.getItem("tokenuser")
  var getitemuser = localStorage.getItem('data_user')
 
 if(getitemuser == undefined && gettokenuser == undefined){
   window.location.href='/'
 
 }
 
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
    servicio_escojido: detaildata,
    nombrecodigo: serviciosa.nombre
})

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
showfivemesage = (showmessage) => {
 if(showmessage == true){
  this.setState({
    mesajeespera: showmessage
  })  
 }
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
  cod_direccion : e.target.value
})

}



getdesdireccion = (direcciones) =>{
  console.log("Se dio click >>>>>>>>>>>>>>>>>>>>><<><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")
  console.log(direcciones)
  var referencia = direcciones.referencia
  this.setState({
    descripcion : referencia,

  })
}

  render() {

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
                      value={this.state.cod_direccion}
                      onChange={this.handleChange}
                      style={{color:'white'}}
                      
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
                    <p style={{color:'white'}}>otros datos: {this.state.descripcion}</p>

              </Col>
          </Row>
          <Modalmap 
              updatedirecciones = {this.updatedirecciones}

      />
        

          <p className="ttservice">TecniGO</p>
          <p className="spantextp">Resolvemos tus problemas tecnicos desde tu hogar</p>
          {this.state.mesajeespera == false ?
            <div>          

            </div>
          :

          <p className="spantextp" style={{fontSize:39}}>Estaremos contactandole en menos de <span style={{fontSize: 39}}>5</span> minutos</p>

          }
        <CssBaseline />
        <Container maxWidth="md">
          <Typography component="div"  style={{  }}>
            <div className={this.props.classes.root}>
              <Grid container spacing={3}>
          


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
                        
                                            <div className={this.props.classes.paper} onClick={() => this.handlequestion(serviciosa)}>
                                            <img src={arraimages[i]} className="miradio" width="90" alt="servicios tecnigo"/>

                                      <p  style={{color:'white', fontSize:13}}>{serviciosa.nombre}</p>
                         
                                            </div>
                                        </Grid>

                               
                                        
                                      )
                                      })
                
                          }
                            <Moucopy 
                             changepl = {this.state.showmodal}
                             valfalse = {this.passproptofalse}
                            questions = {this.state.seccion_preguntas}
                            servicio_escojido = {this.state.servicio_escojido}
                            cod_direccion = {this.state.cod_direccion}
                            showfivemesage = {this.showfivemesage}
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
{/**
 *  <Popupnewdireccion 
        showmodal = {this.state.showmodal}
        passproptofalse = {this.passproptofalse}
        direccion_usuario = {this.state.direccion_usuario}
      />
      <br />
      <br />
      <br />

 */}
     
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