import React from 'react';
import deliver from '../../assets/img/delyber.jpg'
import tecnico from '../../assets/img/tecnico.jpg';
import maqui from '../../assets/img/maqui.jpg';
import {Paper} from '@material-ui/core';
import movilout from '../../assets/img/lets.png';
import { makeStyles } from '@material-ui/core/styles';
import ggleandapple from '../../assets/img/googleandapple.png';

const useStyles = makeStyles(theme => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
      marginTop: '40px',
    },
    container2: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
      marginTop: '-70px',
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
      marginBottom: theme.spacing(1),
    },
    divider: {
      margin: theme.spacing(2, 0),
    },
  }));
  export default function Landrefix() {  
    const classes = useStyles();

        return(
                <div>
                        <section className="content tpuser">
                        <p className="pstyle">TecniGO</p>
                       <div>
                       <button className="myrightbtn">Usuario</button>
                        <button className="myleftbtn">Tecnico</button>
                       </div>
                        </section>
                        <section className="content nextc">
                      
                        
                        <div className={classes.container}>
                        
                          <div style={{ gridColumnEnd: 'span 5' }}>
                            <Paper className={classes.paper}>
                            <img src={deliver} className="imgdeli" width="600" height="450" alt="imgdelivery"/> 


                            </Paper>
                          </div>
                          <div style={{ gridColumnEnd: 'span 7' }} className="sppaddin">
                            <Paper className={classes.paper}>
                              <h3>Tecnico en tu Hogar</h3>
                              <center>
                                
                              </center>
                            </Paper>

                            <span className="sppaddin"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </span>
                          </div>
                        </div>

    
                      </section>

                      <section className="content nextc">
                      
                        
                        <div className={classes.container}>
                        
                          <div style={{ gridColumnEnd: 'span 7' }} className="sppaddin">
                            <Paper className={classes.paper}>
                            <h3>Tecnicos Expertos</h3>


                            </Paper>
                            <div >
                            <span >
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </span>
                            </div>
                          </div>
                          <div style={{ gridColumnEnd: 'span 5' }}>
                            <Paper className={classes.paper}>
                              <img src={tecnico} className="imgdeli" width="600" height="450" alt="imgtecnico"/> 

                              <center>
                                
                              </center>
                            </Paper>
                          </div>
                        </div>

    
                      </section>

                      <section className="content nextc">
                      
                        
                        <div className={classes.container}>
                        
                          <div style={{ gridColumnEnd: 'span 5' }}>
                            <Paper className={classes.paper}>
                            <img src={maqui} className="imgdeli" width="600" height="450" alt="imgmaquina"/> 


                            </Paper>
                          </div>
                          <div style={{ gridColumnEnd: 'span 7' }} className="sppaddin">
                            <Paper className={classes.paper}>
                              <h3>Solucciones Rapidas</h3>
                              <center>
                                
                              </center>
                            </Paper>
                            <span>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                            </span>
                          </div>
                        </div>

    
                      </section>
                       <section className="content secontc" >
                       <div className={classes.container2}>

                       <div style={{ gridColumnEnd: 'span 8' }} className="sppaddinlts"> 
                        <Paper className={classes.paper}>
                          <div>
                          <h2>TecniGO App</h2>
                          </div>
                        </Paper>
                        <span className="spst">Soluciona tus problemas mas rapido y sin obstaculos utilizando nuestra app </span>
                        <br/>
                        <img src={ggleandapple} className="tiendasappggl" width="400" height="120" alt="imgstores"/>
                        </div>
                      <div style={{ gridColumnEnd: 'span 4' }}>
                        <img src={movilout} className="imgdeli" width="420" height="700" alt="imgmovil"/> 

                      </div>
                      </div>
                       </section>
                </div>
        )
    }


/*
           
                    <section className="content nextc">
                        <GridContainer>
                        <img src={deliver} className="imgdeli" width="600" height="520"/> 
                        <p className="sometitle">Title</p>
                        </GridContainer>
    
                       </section>
                       
*/ 