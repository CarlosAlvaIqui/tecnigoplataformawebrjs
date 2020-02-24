import React, {useState} from 'react';
import {Modal, Button,} from 'react-bootstrap'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddCircleOutlineico from '@material-ui/icons/AddCircleOutline';
import FlagOutlinedico from '@material-ui/icons/FlagOutlined';

const Popupnewdireccion = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
                        <Grid item xs={6} sm={12} >
                            <div className="midireccioncss">
                                <FlagOutlinedico 
                                className="icocss"
                                />
                            <span>Av Socabaya numero 420</span>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={12} >
                            <div className="midireccioncss">
                            <FlagOutlinedico
                            className="icocss"
                             />

                                <span>Av Socabaya numero 420</span>
                            </div>
                        </Grid>
                      
                    </Grid>
                    <div className="newdireccionss">
                        <AddCircleOutlineico
                        className="icocss"
                        />
                            <span>Añadir Otra Direccion</span>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    {
                        /**
                         * <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                         */
                    }
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )

}

export default Popupnewdireccion;