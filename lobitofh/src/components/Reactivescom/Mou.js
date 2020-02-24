import React from 'react';
import {Modal, Button,} from 'react-bootstrap'



import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';


const Mou = (props) => {
    console.log(props.algo)

    var idpreg = props.algo
    
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

          switch (idpreg) {
              case 1:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
                  break;
              case 2:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 3:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 4:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 5:
                   preguntassd =[{question:'Salen anuncion sin parar'},{question:'Desaparecen archivos'},{question:'Deje a mi mamá con la pc'}]
      
                  break;
              case 6:
                   preguntassd =[{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 7:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 8:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 9:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
                  break;
              case 10:
                   preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
      
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
        {props.ninoni}
        </Button>
  
        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {props.algo}
            </p>
            <FormGroup row>
                      {
                        preguntassd.map((pregunta,index) => {
                          return(
                           <React.Fragment key={index}>
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

                         </React.Fragment>
                            
                          )
                         
                        })
                      }
                      
             </FormGroup>
             <TextField id="standard-basic" label="Otro" />

          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Mou;