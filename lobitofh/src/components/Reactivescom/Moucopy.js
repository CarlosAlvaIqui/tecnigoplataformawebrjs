import React, {useState, useEffect } from 'react';
import {Modal, } from 'react-bootstrap'



import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';

import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import MuiAlert from '@material-ui/lab/Alert';


import Button from '@material-ui/core/Button';
import axios from '../../utils/axios'
var i = 0;
var aea = true



function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Mou = (props) => {
  var getitemuser = localStorage.getItem('data_user')
  var strindatauser = JSON.parse(getitemuser).data.cod
  
  useEffect(() => {
    if(props.cod_direccion != ''){
      Setwarningdireccion(false)

    }

  });



    var idpreg = props.id_pregunta
    
    const [open, setOpen] = React.useState(false);
    const [transition, setTransition] = React.useState(undefined);
  
    const [opcion, setopcion] = React.useState("");
    const [solsuccesfull,Setsolsuccesfull] = useState(false);
    const [questions,Setquestions] = useState([]) 
    const [warningdireccion,Setwarningdireccion] = useState(false)

    const [show, setShow] = React.useState(props.changepl);


    const handleClick = (Transition) => () => {
      setTransition(() => Transition);
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


   const handlecrearsolicitud = (e) => {

if(props.cod_direccion == ''){
  Setwarningdireccion(true)

}else{

  var crearsilicitud = {
    nombre: props.servicio_escojido.nombre,
    detalle: opcion,
    usuarioCod: strindatauser,
    direccionCod: props.cod_direccion,
    precio: props.servicio_escojido.precio
  
  }

  e.preventDefault()
  axios({
    method:'post',
    url:`solicitudes`,
    headers:{
      Authorization: `Bearer `+localStorage.getItem('tokenuser')
    },
    data:crearsilicitud
  }).then(response =>{
      console.log("la respuesta de la creaciion de solicitud  ", response )
      Setsolsuccesfull(true)
      props.valfalse()
      props.showfivemesage(true)
  }).catch(error => {
      console.log("hay error yano quiero vivirs ", error)
 
  })
  
}

   }

   const handleChange = (e) => {
    setopcion(e.target.value);
     aea = e.target.checked 
   }

    


    var questionmap = props.questions

    console.log(questionmap + "<<<<<<<<<<>>>>>>>>>>aea")
    console.log(props.servicio_escojido.nombre)

    console.log("asdadsadsasadsadsadsadsasad"+props.changepl)
    console.log("asdadsadsasadsadsadsadsasad"+props.servicio_escojido.cod)
  console.log(opcion)
  console.log(aea)

    return (
      <>


     
  
        <Modal
          show={props.changepl}
          onHide={props.valfalse}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
    <p>Cod_Usurio : {strindatauser}</p>  
    <p>Precio : {props.servicio_escojido.precio}</p>
      <p>Nombre : {props.servicio_escojido.nombre}</p>
    <p>Cod_Direccion : {props.cod_direccion}</p>
      
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.id_pregunta}
              Marque que problemas presenta
            </p>
            <FormGroup row>
            {
        

              questionmap.map(quests => (

                <div key={quests.cod} style={{paddingLeft:60,paddingRight:60}}>
                <FormControlLabel
                  control={
                    
                    <Checkbox
                    onChange={handleChange}
                    value = {quests.nombre}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                 }
                 label={quests.nombre}
                 
               />

            </div>
                                   
              ))
            }
          

             </FormGroup>
            <div>
            <TextField id="standard-basic" label="Otro" style={{marginLeft:60}}/>
            <br/>
            <br/>

            

             <Button variant="contained" color="secondary" fullWidth onClick={handlecrearsolicitud}>
                      Enviar
             </Button>
              {
                warningdireccion === false ?
                  <div>
                   
                  </div>
                : 

                <Alert severity="warning">Deve de crear o seleccionar una direccion</Alert>

              }
              {
                solsuccesfull === true ?
                <Alert severity="success">This is a success message!</Alert>

                :
                  <div>

                    </div>
              }
            </div>  
          </Modal.Body>
        </Modal>
 
      </>
    );
  }
  
export default Mou;