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
      props.showfivemesage(true)
      setOpen(true);


      setTimeout(() => {
        setOpen(false);
        props.valfalse()

      }, 2500);

    
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
            <strong className="Titlepopup">Marque que problemas presenta
</strong>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
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
              <div style={{paddingRight:140}}>
              <TextField id="standard-basic" label="Otro" style={{marginLeft:60}} fullWidth/>

              </div>
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

<Snackbar open={open} message="Solicitud exitosa" />

              /*
                solsuccesfull === true ?
                <Alert severity="success">This is a success message!</Alert>

                :
                  <div>

                    </div>*/
              }
            </div>  
          </Modal.Body>
        </Modal>
 
      </>
    );
  }
  
export default Mou;