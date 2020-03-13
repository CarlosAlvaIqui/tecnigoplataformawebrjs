import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CommentIcon from '@material-ui/icons/Comment';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextField from '@material-ui/core/TextField';
import PageviewIcon from '@material-ui/icons/Pageview';

import tecnigoblanco from '../../assets/img/icons/logotecnigoblanco2.png'
const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      paddingLeft:40,
      paddingRight:40
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

const Blog = () => {
    const classes = useStyles();
    const [busquedanom,SetBusquedanom] = React.useState("")
    const [comentarios,SetComentarios] = React.useState(
            [
            {id:1,titulo:"Una Carrera en Tecnologia empieza siempre con un primer paso",nombre:"Carlos Alvarez",hora:5,comentario:20,corazones:40},
            {id:2,titulo:"Reparaciones Automaticas",nombre:"David Molina",hora:28,comentario:15,corazones:50},
            {id:3,titulo:"Reforcemos nuestras Habilidades blandas",nombre:"Danin Granatte",hora:5,comentario:26,corazones:78},
            {id:4,titulo:"Manejo de Horarios",nombre:"Donn Grey",hora:9,comentario:12,corazones:16},
            {id:5,titulo:"Como extender tiempo de vida de nuestras computadoras",nombre:"Andre Farm",hora:1,comentario:14,corazones:24},
            {id:6,titulo:"Como Cuidar correctamente una PC",nombre:"Maria Reinheart",hora:8,comentario:15,corazones:58},
            {id:7,titulo:"Como ser autodidacta",nombre:"Richar Belt",hora:12,comentario:20,corazones:46}
            ]
    )
   const buscahandler = (e) => ({
      
    })
    return (
    <React.Fragment>
            <div className="tecgofon">
            <Grid container spacing={3} >
        <Grid item xs={12} >
              <p className="tittletec">
              <img src={tecnigoblanco} style={{width:70}} alt="logotecnigo"/>
                TecniGO
              </p>
        </Grid>
       
      </Grid>
            </div>  
            <CssBaseline />
      <Container maxWidth="lg">
        <Typography component="div" >
        <p style={{fontSize: 23}}><strong>Posts</strong></p>

            <div className={classes.root}>
            <Grid container spacing={2} alignItems="flex-end" >

            <Grid item xs={12} sm={6} >
              </Grid>
              <Grid item xs={12} sm={5} style={{paddingLeft:0}}>
                <TextField id="input-with-icon-grid" label="Buscar" fullWidth/>
              </Grid>
              <Grid item >
                <PageviewIcon fontSize='large' color="primary" />
              </Grid>   
         </Grid>
         <br/>
         <br/>
                        <Grid container spacing={3} >
                                {comentarios.map(comment=>{
                                    return(
                                    <React.Fragment key={comment.id}>
                                    <Grid item xs={12} sm={1}>
                                  <Paper className={classes.paper} style={{textAlign:"center"}}>
                                      
                                  <FavoriteIcon
                                  
                                  />
                                      <span>{comment.corazones}</span>
                                  </Paper>
                                </Grid>
                                <Grid item xs={12} sm={11}>
                                  <Paper className={classes.paper}>
                                    <p style={{color: "#0791e6"}}><strong>{comment.titulo}</strong></p>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum </p>
                                    <span ><AccountCircleRoundedIcon fontSize={"large"}/> {comment.nombre}</span>
                                      <span style={{marginLeft:18}}><AccessAlarmIcon/> hace {comment.hora} horas</span>
                                      <span style={{marginLeft:18}}><CommentIcon/> {comment.comentario} commentarios</span>
                                  </Paper>
                                </Grid>
                                </React.Fragment>   
                                    )
                                })}
                               
                        </Grid>
            </div>
        </Typography>
      </Container>

    </React.Fragment> 
     );
}
 
export default Blog;