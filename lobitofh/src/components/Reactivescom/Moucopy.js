import React, {useState, useEffect } from 'react';
import {Modal, } from 'react-bootstrap'



import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from '@material-ui/core/TextField';

import CircularProgress from '@material-ui/core/CircularProgress';


import Button from '@material-ui/core/Button';


const Mou = (props) => {

  
  useEffect(() => {
 
  });


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

    const [questions,Setquestions] = useState([]) 

   
  console.log("asdadsadsasadsadsadsadsasad"+props.changepl)

    const [show, setShow] = React.useState(props.changepl);



    var questionmap = props.questions
    console.log(questionmap + "<<<<<<<<<<>>>>>>>>>>aea")
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
            {props.nombreservi}
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
                     onChange={handleChange("checkedA")}
                     value="checkedA"
                     color="primary"
                   />
                   
                 }
                 label={quests.nombre}
                 
               />

            </div>
                                   
              ))
            }
          

                 {
                   /**
                    *             {
                        preguntassd.map((pregunta,index) => {
                          return(
                           <div key={index} style={{paddingLeft:60,paddingRight:60}}>
                            <FormControlLabel
                              control={
                                
                                <Checkbox
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
                    */
                 }
             </FormGroup>
            <div>
            <TextField id="standard-basic" label="Otro" style={{marginLeft:60}}/>
            <br/>
            <br/>

            

            <Button variant="contained" color="secondary" type="submit" fullWidth>
                      Enviar
             </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    );
  }
  
export default Mou;