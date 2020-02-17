import React, {useState} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Checkbox from '@material-ui/core/Checkbox';

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
            { nombre: 'Pc lenta', tecnico: 'Pedro Suares' , fecha : '28 Marzo 13:00' ,atendido : true},
            { nombre: 'Recuperar I.',tecnico: 'Joseph Monteero', fecha : '21 Marzo 10:00', atendido : false },
            { nombre: 'Licencia', tecnico: 'Pine Lower' ,fecha : '14 Marzo 15:00', atendido : true},
            { nombre: 'Impresora', tecnico: 'Rick Tower' ,fecha : '02 Marzo 9:00',atendido : true},
            { nombre: 'Virus', tecnico: 'Analisa Melo', fecha : '27 Febrero 16:00',atendido : false},
            { nombre: 'Internet', tecnico: 'Maria Carmela', fecha : '22 Febrero 11:00',atendido : true},
            { nombre: 'No Responde ',tecnico: 'Daniela Piurana', fecha : '14 Febrero 14:00', atendido : false},
            { nombre: 'Instalacion ',tecnico: 'David Jhonson', fecha : '12 Febreo 21:00',atendido : false},
            { nombre: 'Limpieza',tecnico: 'Jose Karm', fecha : '06 Febrero 18:00',atendido : false},
            { nombre: 'Saturacion', tecnico: 'Luis Mink' , fecha : '02 Febrero 10:00', atendido : true},
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
        <Typography component="div" style={{ backgroundColor: '#f4f4f4 ' }} >

                {
                    statetable.historial.map(histo => (
                <div className={classes.root}>
                    <Grid container spacing={2} className="conthisto">

                        <Grid item xs={12} sm={3}>
                            <div>
                                 <Checkbox
                                    checked={checked}
                                    onChange={handleChange}
                                    value="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                              <span>TecniGO</span>

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