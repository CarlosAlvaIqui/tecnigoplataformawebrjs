import React, {useState,Component,Fragment} from 'react'

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
import tecnigoblanco from '../../assets/img/icons/logotecnigoblanco2.png'
import axios from '../../utils/axios'
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





var getitemuser = localStorage.getItem('data_user')
var strindatauser = JSON.parse(getitemuser).data.cod
class Newtablehistorial extends Component {
  
componentDidMount(){
  axios({
    method:'get',
    url:`solicitudes/usuario/${strindatauser}`,
    headers:{
      Authorization: `Bearer `+localStorage.getItem('tokenuser')
    }
  }).then(response =>{
    console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")
    console.log(response)
    var almacendata = response.data
    console.log(almacendata)

          if(almacendata){
            this.setState({
              statetable : almacendata
            })
          }else{
              console.log("error api")
          }

    var xusertonken = localStorage.getItem("tokenuser")
      console.log("usuario token >>>>>>>"+ xusertonken)
    //window.location.href='/Serviceslanding'

  }).catch(error => {
      console.log("hay error yano quiero vivirs ", error)
  
  })
}
  state = {  

    statetable: [


    ],
    checked: true

  }

  handleChange = () => {
    this.setState({
      checked: false
    })
  }
  render() { 
    return ( 
    <Fragment>
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
        <Typography component="div"  >
{/**
 *   <Grid container spacing={2} alignItems="flex-end" >
              
             
              <Grid item xs={12} sm={5} >
                <TextField id="input-with-icon-grid" label="Buscar Solicitud" fullWidth value={busqueda} onChange={seacrhhandle} />
              </Grid>
              <Grid item >
                <SearchIcon onClick={() => busquefunc()}/>
              </Grid>   
            </Grid>
 */}
       
        <br/>
                <p><strong>Solicitudes</strong></p>
                {
                    this.state.statetable.map(histo => (
                <div className={useStyles.root} style={{ backgroundColor: '#f4f4f4 ' }} key={histo.id}>
                    <Grid container spacing={2} className="conthisto">

                        <Grid item xs={12} sm={3}>
                            <div>
                                 <Checkbox
                                    checked={this.state.checked}
                                    onChange={this.handleChange}
                                    value="primary"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            <img src={flechana} style={{ width: 30}} alt="iconflecha"/>

                              <span style={{paddingLeft: 5}}>TecniGO</span>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm={7}>
                            <div>
                    <span><strong>{histo.nombre}</strong></span> - Al encender la computadora - {histo.direccion}
                    <div className="micarhi"> <p className="chodis">San Pedrito{histo.nombreTecncio}</p> </div>
                            </div>

                        </Grid>
                        <Grid item xs={12} sm={2}>
                            {histo.fechaCreacion}
                        </Grid>
                    </Grid>
                    <hr className="hrstyle"/>
                    </div>
                    ))
                }
                    
        </Typography>
      </Container>

    </Fragment>
);
  }
}
 



export default Newtablehistorial;
