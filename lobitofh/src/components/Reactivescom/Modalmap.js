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
import HomeOutlinedico from '@material-ui/icons/HomeOutlined'
import AccountCircle from '@material-ui/icons/AccountCircle';



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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const classes = useStyles();

  return (
    <React.Fragment>

      <Button variant="primary" onClick={handleShow}>
        Modal Mapp
      </Button>

      <Modal show={show} onHide={handleClose}
        size="md"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title ><strog className="Titlepopup">Añada una direccion de atencion</strog></Modal.Title>
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
                         placeholder="2do piso 3ra casa ala derecha"
                  />
                </FormControl>
              </div>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Mapaeje
                googleMapURL="https://maps.googleapis.com/maps/api/js?key="
                containerElement={<div style={{ height: '200px' }}></div>}
                mapElement={<div style={{ height: '100%' }} />}
                loadingElement={<p>Cargando.....</p>}
              />
            </Grid>
          </Grid>

        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>

  );
}



export default Modalmap;