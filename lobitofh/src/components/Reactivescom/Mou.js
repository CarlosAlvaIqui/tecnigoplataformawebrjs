import React from 'react';
import {Modal, Button,} from 'react-bootstrap'



import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';


const Mou = (props) => {
    console.log(props.id_pregunta)

    var idpreg = props.id_pregunta
    
    const [state, setState] = React.useState({
      checkedA: true,
      checkedB: true,
      checkedF: true,
      checkedG: true
    });
  
    const handleChange = name => event => {
      setState({ ...state, [name]: event.target.checked });
    };


    if(idpreg == null){
      console.log("el id esta nullo a un")
      }else {      
          console.log("si esta bien noma")
          var preguntassd = []
//enves de este switch hacer un component didmount
          switch (idpreg) {
              case 1:
                   preguntassd = [{question:'Programas operan con lentitud'},{question:'Tarda en encender el equipo'},{question:'Programas no habren rapidamente'}]
                  break;
              case 2:
                   preguntassd = [{question:'No encuentro mi informacion en mis archivos'},{question:'Se daño mi Disco duro'},{question:'Encriptaron/robaron mi informacion'}]
                  break;
              case 3:
                   preguntassd = [{question:'No encuentro Licencia original'},{question:'Renovar Licencia Original'},{question:'Adquirir Licencia Original'}]
      
                  break;
              case 4:
                   preguntassd = [{question:'No enciende la impresora'},{question:'No imprime los colores deseados'},{question:'Imprime borroso o con manchas'}]
      
                  break;
              case 5:
                   preguntassd =[{question:'Salen anuncion sin parar en mi ordenador'},{question:'Aparecen archivos desconocidos en mis carpetas'},{question:'Desaparecen Archivos en mi ordenador'}]
      
                  break;
              case 6:
                   preguntassd =[{question:'Demora en abrir una pagina web'},{question:'se corta la conexion a internet'},{question:'La conexion baja su rendimiento a cierta hora'}]
      
                  break;
              case 7:
                   preguntassd = [{question:'Demora demasiado tiempo en enceder la computadora'},{question:'La pantalla de la pc no enciende'},{question:'No enciende el ordenador'}]
                  break;
              case 8:
                   preguntassd = [{question:'Necesito software original'},{question:'Quiero actualizar mi software a una nueva version'},{question:'Quiero informacion acerca de este software'}]
      
                  break;
              case 9:
                   preguntassd = [{question:'Quiero dar una limpieza a mi PC '},{question:'Quiero formatear mi pc '},{question:'Quiero formateo y limpieza de pc'}]
      
                  break;
              case 10:
                   preguntassd = [{question:'No me llega correos nuevos'},{question:'Necesito ampliar el almacenamiento de mi cuenta de gmail'},{question:'Necesito gestionar mi correo'}]
      
               break;
              default:
                  console.log("ocurrio un error")
              break;
          }
      
      
      }










    const [show, setShow] = React.useState(false);
    return (
      <>
        <Button variant="primary" onClick={() => setShow(true)}>
        {props.nombre_problema}
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            {props.nombre_problema}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.id_pregunta}
              Marque que problemas presenta
            </p>
            <FormGroup row>
                      {
                        preguntassd.map((pregunta,index) => {
                          return(
                           <div key={index} style={{paddingLeft:60,paddingRight:60}}>
                            <FormControlLabel
                              control={
                                
                                <Checkbox
                                 /* checked={state.checkedA}*/
                                  onChange={handleChange("checkedA")}
                                  value="checkedA"
                                  color="primary"
                                />
                                
                              }
                              label={pregunta.question}
                              
                            />

                         </div>
                            
                          )
                         
                        })
                      }
                      
             </FormGroup>
            <div>
            <TextField id="standard-basic" label="Otro" style={{marginLeft:60}}/>
            <br/>
<button>Enviar</button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Mou;