import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import perfilphoto from '../../assets/img/hppisfree.jpg';
import { Link, NavLink } from 'react-router-dom';


import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

const Detailswork = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className="tecgofon">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <p className="tittletec">
              TecniGO
              </p>
          </Grid>

        </Grid>
      </div>
      <div>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography component="div" style={{}}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={7}>
                <p>
                  <strong className="titlebig">
                    Detalle del trabajo
                    </strong>
                </p>
                <br />

                <div>
                  <p>
                    <strong className="titlespace">
                      Lugar del trabajo a realizar
            </strong>
                    <br />
                    <span className="mispa">
                      Establece la direccion exacta
            </span>
                  </p>
                  <div className="divradi">
                    <div className="tothel">
                      <span>calle</span>
                      <br />
                      <span>Av. Ejercito</span>
                    </div>
                    <div className="tothell">
                      <span>Datos(piso puerta)</span>
                      <br />
                      <span>Sin datos</span>
                    </div>
                    <div className="tother">
                      <span></span>
                      <br />
                      <span className="movet">Editar</span>
                    </div>

                  </div>
                </div>

                <br />
                <br />


                <div>
                  <p>
                    <strong className="titlespace">
                      Hora
            </strong>
                    <br />

                    <span className="mispa">
                      Hora programada
            </span>
                  </p>
                  <div className="divradi">

                    <div className="halfdiv">
                      <span>Fecha y hora</span>
                      <br />
                      <span>Vierner 31 de Enero del 2020</span>
                    </div>
                    <div className="halfdivc">
                      <span></span>
                      <br />
                      <span className="movet">15:00</span>
                    </div>

                  </div>
                </div>

                <br />
                <br />



                <div>
                  <p>
                    <strong className="titlespace">
                      Datos del tecnico
                        </strong>
                    <br />

                    <span className="mispa">
                      Revisa los datos del tecnico
                        </span>
                  </p>
                  <div className="cartatecnico">
                    <div className="headercard">
                      <p>TecniGO</p>
                    </div>
                    <div className="tecnicodata">
                      <div className="divimgtec">
                        <img src={perfilphoto} style={{ width: 150 }} className="tecper" />

                      </div>

                      <div className="divdatatec">
                        <strong>
                          <span className="infotec">TEC. Diana Tumba Torres </span>
                        </strong>
                        <div className="datat">
                          <p className="mite">Tecnico en Computacion</p>
                          <p className="mite">28 Años</p>
                          <p className="mite">Dtuma.torres@gmail.com</p>
                          <p className="mite">963258753 - 963254178</p>
                          <div>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                              <Rating
                                name="customized-empty"
                                defaultValue={2}
                                precision={0.5}
                                emptyIcon={<StarBorderIcon fontSize="inherit" />}
                              />
                              <Button variant="contained" color="secondary">
                                Calificar
                                          </Button>

                            </Box>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="centerthis">
                      <hr />
                      <p >El hombre se esta poniendo la soga al cuello</p>
                      <hr />
                    </div>


                    {
                      /**
                       *  
                       */
                    }

                  </div>
                </div>

                <br />
                <br />


                <div>
                  <p>
                    <strong className="titlespace">
                      Pago
                     </strong>
                    <br />

                    <span className="mispa">
                      Realizar el pago
              </span>
                  </p>
                </div>

                <br />
                <br />

                <div>
                  <p>
                    <strong className="titlespace">
                      Informe
                    </strong>
                    <br />

                    <span className="mispa">
                      Lea el informe
                      </span>
                    <br />
                    <Link className="nav-bar-brand" to={"/"}>
                      <span>Ver Informe</span>
                    </Link>

                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={5}>
              </Grid>
            </Grid>

          </Typography>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Detailswork;