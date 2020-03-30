import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import Mapaeje from './Mapaeje'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Modal, Button, } from 'react-bootstrap'

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import FlagOutlinedico from '@material-ui/icons/FlagOutlined';
import HomeOutlinedico from '@material-ui/icons/HomeOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddLocationIcon from '@material-ui/icons/AddLocation';
import axios from '../../utils/axios';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Modalmap = (props) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log("SE CERRO PUES ")

    setShow(false);
    var getdatauser = localStorage.getItem('data_user')
    var actualuser = JSON.parse(getdatauser).data.cod
  
      axios({
        method:'get',
        url:`direcciones/${actualuser}`,
        headers:{
          Authorization: `Bearer `+localStorage.getItem('tokenuser')
        }
      }).then(response =>{
        console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<RESPUESTA DIRECCIONES DEL USUARIO DESDE EL SERVICE LANDIN PORFABOR AHORA SI")
        console.log(response.data)
        var almacenadirecciones = response.data
        var execute = true
        props.updatedirecciones(almacenadirecciones,execute)

          
        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
        
        })
  } 
  const handleShow = () => setShow(true);

const [entrega,SetEntrega] = useState("")
const [adicionadi,Setadicional] = useState("")



  
  const handleEntrega = (e) => {
    SetEntrega(e.target.value)


  }
  const handleadddata = (e) => {
    Setadicional(e.target.value)
  }



  const executeupdate = (e) => {

     
  }

  var execute = false
  const handlecreatedireccion = (e) => {
    var getitemuser = localStorage.getItem('data_user')
    var strindatauser = JSON.parse(getitemuser).data.cod
    var lat = 0
    var lon = 0
    console.log(strindatauser)
    console.log(entrega)
    console.log(adicionadi)

      var newdirecciondata = {
        nombre: entrega,
        referencia: adicionadi,
        lat: lat,
        lon: lon,
        usuarioCod: strindatauser

      }

      e.preventDefault();
      axios({
        method:'post',
        url:'direcciones',
        headers:{
          Authorization: `Bearer `+localStorage.getItem('tokenuser')
        },        
        data:newdirecciondata
      }).then(response =>{
          console.log("la respuesta es ", response)
           execute = false


        var ballidator = true
      }).catch(error => {
          console.log("hay error yano quiero vivirs ", error)

      })






}
 

 





  const classes = useStyles();

  return (
    <React.Fragment>

   <p onClick={handleShow} style={{color:'white'}}> <AddLocationIcon />
Añadir Direccion   </p>

      <Modal show={show} onHide={handleClose}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title ><strong className="Titlepopup">Añada una direccion de atencion</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Grid container spacing={3} className="contpopup">

            <Grid item xs={6} sm={6}>
              <div className="divinpuths">
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Direccion de Entrega</InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <FlagOutlinedico />
                      </InputAdornment>

                    }
                    onChange = {handleEntrega}
                    value={entrega}
                    placeholder="Av Ejercito 420"
                    fullWidth


                  />
                </FormControl>
              </div>

              <div className="divinputh">
                <FormControl className={classes.margin}>
                  <InputLabel htmlFor="input-with-icon-adornment">Otros Datos</InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    startAdornment={
                      <InputAdornment position="start">
                        <HomeOutlinedico />
                      </InputAdornment>
                    }
                    value={adicionadi}
                    onChange = {handleadddata}

                         placeholder="2do piso 3ra casa ala derecha"
                  />
                </FormControl>
              </div>
            </Grid>
          
          </Grid>

        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handlecreatedireccion}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>

  );
}



export default Modalmap;