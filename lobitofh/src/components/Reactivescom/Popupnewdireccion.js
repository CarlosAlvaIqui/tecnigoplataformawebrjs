import React, {useState,Component} from 'react';
import {Modal, Button,} from 'react-bootstrap'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineico from '@material-ui/icons/AddCircleOutline';
import FlagOutlinedico from '@material-ui/icons/FlagOutlined';

import axios from '../../utils/axios'
class Popupnewdireccion extends Component {


 

    state = {
        show: false
    }

    handleClose = () => this.setState({show:false});
     handleShow = () => this.setState({show:true});

render(){
    return(
        <React.Fragment>
    <Button variant="primary" onClick={this.handleShow}>
        Modal Add a new direccion
      </Button>

            <Modal show={this.state.show} onHide={this.handleClose}
            size="md"
            centered>
                <Modal.Header closeButton>
                <Modal.Title>Seleccionar una Direccion de Atencion</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Grid container spacing={3} className="contdireccions">

                </Grid>
                <div className="newdireccionss">
                    <AddCircleOutlineico
                    className="icocss"
                    />
                        <span>Añadir Otra Direccion</span>
                    </div>
                </Modal.Body>
                <Modal.Footer>
           
                     <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleproppass}>
                    Save Changes
                </Button>
             
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

}
        



export default Popupnewdireccion;
/*
const Popupnewdireccion = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





  var  contedireccion_usuario= props.direccion_usuario

        return(
            <React.Fragment>
        <Button variant="primary" onClick={handleShow}>
            Modal Add a new direccion
          </Button>
    
                <Modal show={show} onHide={handleClose}
                size="md"
                centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Seleccionar una Direccion de Atencion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Grid container spacing={3} className="contdireccions">


                        {
                        contedireccion_usuario.map(listadirecciones => (
                            <Grid item xs={12} sm={12} key={listadirecciones.cod}>
                                <div className="midireccioncss">
                                    <FlagOutlinedico 
                                    className="icocss"
                                    />
                                <span>{listadirecciones.nombre}</span>
                                </div>
                            </Grid>

                        ))
                        }




                    </Grid>
                    <div className="newdireccionss">
                        <AddCircleOutlineico
                        className="icocss"
                        />
                            <span>Añadir Otra Direccion</span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
               
                         <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleproppass}>
                        Save Changes
                    </Button>
                 
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )

}

export default Popupnewdireccion;*/