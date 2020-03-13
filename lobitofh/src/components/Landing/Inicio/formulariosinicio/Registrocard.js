import React, { Component,Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from '../../../../utils/axios';
class Registrocard extends Component {
    state = { 
        usuario_Nombre : '',
        celular:'',
        correo:'',
        contrasena:'',
        mostrar:false,

     }
     usuariohandler = (e) => this.setState({

        usuario_Nombre: e.target.value
      })
      celularhandler = (e) => this.setState({
    
        celular: e.target.value
      })
      correohandler = (e) => this.setState({
    
        correo: e.target.value
      })
      contrasenahandler = (e) => this.setState({
    
        contrasena: e.target.value
      })
        
  valuefunc = (e) => {
    console.log(this.state.usuario_Nombre)
    var datos = {
      nombre: this.state.usuario_Nombre,
      celular: this.state.celular,
      correo: this.state.correo,
      contrasenia:  this.state.contrasena}
     /*
      nombre: "carlosre",
      celular: "+51932091053",
      correo: "ccarlosalvarezz.999@gmail.com",
      contrasenia:  "carlosre4" 
    }
    console.log(datos)
    if(this.state.usuario_Nombre === ""){
        console.log("ingresa algo pues >>>>>")
      this.setState({
        mostrar : false
      })
    }*/
 
}


sendval= (e) => {

  const mostrar = this.state.mostrar
  var datos = {
    nombre: this.state.usuario_Nombre,
    celular: "+51932091972",
    correo: this.state.correo,
    contrasenia:  this.state.contrasena}

  console.log(datos)
  this.props.mifuncion(mostrar)
/*
  e.preventDefault();
  axios({
    method:'post',
    url:'registrar',
    data:datos
  }).then(response =>{
      console.log("la respuesta es ", response)
      
  }).catch(error => {
      console.log("hay error yano quiero vivirs ", error)
  })
*/
}

  


    render() { 
     
        return ( 
            <div className="contformulariotecnico2">

            <div>

              <TextField id="input-with-icon-grid" label="Nombre " fullWidth value={this.state.usuario_Nombre} onChange={this.usuariohandler}/>

            </div>

            <div>
              <br />
              <TextField id="input-with-icon-grid" label="Celular" fullWidth value={this.state.celuar} onChange={this.celularhandler}/>

            </div>

            <div>
              <br />
              <TextField id="input-with-icon-grid" label="Correo" fullWidth value={this.state.correo} onChange={this.correohandler}/>

            </div>

            <div>
              <br />
              <TextField id="input-with-icon-grid" label="Contraseña" fullWidth value={this.state.contrasena} onChange={this.contrasenahandler}/>

            </div>
            <br />

    


            <Button variant="contained" color="secondary" onClick={this.sendval} fullWidth>
              Registrar
           </Button>
          </div>
         );
    }
}
 
export default withStyles(theme => ({

    textField: {
  
      width: 320,
      backgroundColor: 'white'
    },
  
  }
  ))(Registrocard);