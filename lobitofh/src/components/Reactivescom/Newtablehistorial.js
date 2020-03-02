import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';
import flechana from '../../assets/img/icons/flechana.png';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
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



const Newtablehistorial = () => {
    const classes = useStyles();
    const [checked, setChecked] = useState(true);
    const handleChange = event => {
        setChecked(event.target.checked);
      };



      const [statetable, setStatetable] = React.useState({
        historial: [
            { nombre: 'Pc lenta', tecnico: 'Pedro Suares' , fecha : '28 Marzo 13:00' ,atendido : true,id: 1},
            { nombre: 'Recuperar I.',tecnico: 'Joseph Monteero', fecha : '21 Marzo 10:00', atendido : false,id:2},
            { nombre: 'Licencia', tecnico: 'Pine Lower' ,fecha : '14 Marzo 15:00', atendido : true,id: 3},
            { nombre: 'Impresora', tecnico: 'Rick Tower' ,fecha : '02 Marzo 9:00',atendido : true,id: 4},
            { nombre: 'Virus', tecnico: 'Analisa Melo', fecha : '27 Febrero 16:00',atendido : false,id: 5},
            { nombre: 'Internet', tecnico: 'Maria Carmela', fecha : '22 Febrero 11:00',atendido : true,id: 6},
            { nombre: 'No Responde ',tecnico: 'Daniela Piurana', fecha : '14 Febrero 14:00', atendido : false,id: 7},
            { nombre: 'Instalacion ',tecnico: 'David Jhonson', fecha : '12 Febreo 21:00',atendido : false,id: 8},
            { nombre: 'Limpieza',tecnico: 'Jose Karm', fecha : '06 Febrero 18:00',atendido : false,id: 9},
            { nombre: 'Saturacion', tecnico: 'Luis Mink' , fecha : '02 Febrero 10:00', atendido : true,id: 10},
          ]
      });


    return(
        <React.Fragment>

<div className="tecgofon">
      <Grid container spacing={3} >
        <Grid item xs={12} >
              <p className="tittletec">
                TecniGO
              </p>
        </Grid>
       
      </Grid>
    </div>


            <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div"  >

       <Paper > 
         <Grid container spacing={2} alignItems="flex-end" style={{ backgroundColor: '#f4f4f4 ' }}>
              
              <Grid item >
                <SearchIcon />
              </Grid>   
              <Grid item xs={12} sm={5} >
                <TextField id="input-with-icon-grid" label="Buscar Solicitud" fullWidth/>
              </Grid>

            </Grid>
        </Paper>
        <br/>
                <p><strong>Solicitudes</strong></p>
                {
                    statetable.historial.map(histo => (
                <div className={classes.root} style={{ backgroundColor: '#f4f4f4 ' }} key={histo.id}>
                    <Grid container spacing={2} className="conthisto">

                        <Grid item xs={12} sm={3}>
                            <div>
                                 <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    value="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            <img src={flechana} style={{ width: 30}} alt="iconflecha"/>

                              <span style={{paddingLeft: 5}}>TecniGO</span>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <div>
                    <span><strong>{histo.nombre}</strong></span> - Al encender la computadora - Av socabaya 420
                    <div className="micarhi"> <p className="chodis">{histo.tecnico}</p> </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            {histo.fecha}
                        </Grid>
                    </Grid>
                    <hr className="hrstyle"/>
                    </div>
                    ))
                }
                    
        </Typography>
      </Container>

        </React.Fragment>

    )

}

export default Newtablehistorial;