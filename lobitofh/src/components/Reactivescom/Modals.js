import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Exradiusimg from './Exradiusimg';
import { Input,Modal,TextField,Button   } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },

}));
const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })(props => <Checkbox color="default" {...props} />);

export default function Modals() {
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };
      
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    console.log("el aea")

  };
  const handleOpen2 = () => {
    setOpen2(true);
    console.log("el aea")

  };
 const imageClick = () => {
          console.log('Click');
        } ;

  const handleClose = () => {
    setOpen(false);

  };
  const handleClose2 = () => {
    setOpen2(false);

  };

  return (
    <div>
    

      <div className="hoversito"  onClick={handleOpen}>
          <Exradiusimg />
      </div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
                    <h1>Que dificultades tiene?</h1>
                <FormGroup >
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                           
                        />
                        }
                        label="Lag"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                           
                        />
                        }
                        label="Lag x 2"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                        
                        />
                        }
                        label="Tarda en Prende"
                    />
                    <FormControlLabel
                        control={
                        <GreenCheckbox
                            /*
                        checked={state.checkedG}
                            onChange={handleChange('checkedG')}
                            value="checkedG"
                            */
                        />
                        }
                        label="Programa Lento"
                    />

                </FormGroup>
                <TextField id="standard-search" label="Otro" type="search" />
                <br/>
                <br/>
                <Button variant="contained" color="primary" onClick={handleOpen2}>
                    Consultar
                </Button>
      

          </div>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open2}>
          <div className={classes.paper}>
                    <h1>Registrese</h1>
                
                    <FormGroup>
                    <TextField id="outlined-search" label="Correo" type="search" variant="outlined" className="inputnormal"/>
                    <br/>
                    <TextField id="outlined-search" label="Nombre" type="search" variant="outlined" className="inputnormal"/>
                    <br/>

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        className="inputnormal"/>
                                        <br/>

                    <TextField
                        id="outlined-number"
                        label="Numero Telefonico"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        className="inputnormal"
                     />
                                         <br/>

                    </FormGroup>

                <Button variant="contained" color="primary">
                    Registrarse
                </Button>
      
          </div>
        </Fade>
      </Modal>
    </div>
  );
}