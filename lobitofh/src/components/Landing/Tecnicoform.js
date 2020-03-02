import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';  
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import flechaicodown from '../../assets/img/icons/flechaicodown.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logotre from '../../assets/img/icons/logotre.png'
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

const Tecnicoform = () => {
    const classes = useStyles();

        return(

            <React.Fragment>
                <div className="tecgofon">
                    <Grid container spacing={3}>
                        
                       {/**
                        *  <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}><p>Tenemos los Clientes que necesitas</p>
                            <p>Se parte de TecniGo</p>
                        </Paper>
                        
                        </Grid>
                        */}
                    </Grid>
            </div>
            <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" style={{ }} >
        <p style={{textAlign:"center", fontSize:40, marginBottom:50}}><strong>¿Como Funciona?</strong></p>

            <Grid container spacing={3} >
             <Grid item xs={12} sm={5}>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                    <p><strong>Descarga la aplicacion</strong></p>
                    <p>Descarga la aplicacion para profesionales en tu celular consiguela en tu google play</p>
                    </Paper>
              </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{marginTop:80}}>
             <Grid item xs={12} sm={5}>
             <p><strong>Ingrese a la aplicacion</strong></p>
                    <p>Ingrese en Solicitudes y mire todos los trabajos disponibles</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                   
                    </Paper>
              </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{marginTop:80}}>
             <Grid item xs={12} sm={5}>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                    <p><strong>Elige un Trabajo</strong></p>
                    <p>Elige el trabajo que quieras,segun lo que hay que hacer, la zona y la franja horaria</p>
                    </Paper>
              </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{marginTop:80}}> 
             <Grid item xs={12} sm={5}>
             <p><strong>Llego la hora del trabajo</strong></p>
                    <p>Al abrir la app, mira en solicitudes y habilita el GPS, comienza reportando que vas en camino al domicilio.Marca cuando llegue
                        y al comenzar el trabajo.Si se presento algun problema puedes informarlo, llamando a la central de TecniGo
                    </p>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                   
                    </Paper>
              </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{marginTop:80}}>
             <Grid item xs={12} sm={5}>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                    <p><strong>Finaliza el trabajo</strong></p>
                    <p>Marcar como finalizado, hacer el reporte con la conformidad del cliente</p>
                    </Paper>
              </Grid>
              
            </Grid>
            <Grid container spacing={3} style={{marginTop:80, marginBottom: 90}}>
             <Grid item xs={12} sm={5}>
             <p><strong>Cobrar el trabajo</strong></p>
                    <p>Abrir la app, mira en pagos, se mostrara todos tus pagos, el cual se depositara a tu cuenta en menos de 24 horas</p>
              </Grid>
              <Grid item xs={12} sm={2}>
                    <img src={flechaicodown} style={{ width:140 }} alt="flechacicon"/>
              </Grid>
              <Grid item xs={12} sm={5}>
                    <Paper>
                   
                    </Paper>
              </Grid>
              
            </Grid>

            <Grid container spacing={3} >
             <Grid item xs={12} sm={5}>
             <div>
                      <p className="simplepmp">
                          <strong>
                          Requisitos
                          </strong>
                      </p>
                    </div>
                      <div>
                      <ul>
                        <li className="listasimple"><span className="simplepmp">Experiencia de trabajo</span></li>
                        <li className="listasimple"><span className="simplepmp">Responsable, puntual y amable</span></li>
                        <li className="listasimple"><span className="simplepmp">Respetuoso con los clientes</span></li>
                        <li className="listasimple"><span className="simplepmp">Tener Recibos por Honorarios</span></li>
                        <li className="listasimple"><span className="simplepmp">Tener celular con acceso a internet</span></li>
                      </ul>
                      </div>
              </Grid>
              <Grid item xs={12} sm={5}>
                   <Paper>
                              <div className="contformulariotecnico">

                                           <div>
                                          <br/>
                                          <img src={logotre} alt="iconlogo" style={{width:70}}/>

                                          <TextField id="input-with-icon-grid" label="Nombre y Apellido" fullWidth/>

                                          </div>

                                          <div>
                                          <br/>
                                          <TextField id="input-with-icon-grid" label="Correo" fullWidth/>

                                          </div>

                                          <div>
                                          <br/>
                                          <TextField id="input-with-icon-grid" label="Celular" fullWidth/>

                                          </div>

                                          <div>
                                          <br/>
                                          <TextField id="input-with-icon-grid" label="Linkedln" fullWidth/>

                                          </div>
                                          <br/>

                                          <Button variant="contained" color="secondary">
                                                Enviar
                                           </Button>
                              </div>
          

                   </Paper>

              </Grid>
          
              
            </Grid>
        </Typography>
      </Container>
           
            </React.Fragment>
        )
}

export default Tecnicoform;