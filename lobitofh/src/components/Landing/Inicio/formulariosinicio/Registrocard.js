import React, { Component,Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import axios from '../../../../utils/axios';
import  { withRouter } from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from 'react-router-dom';
import { Link,NavLink} from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Registrocard extends Component {


    

    state = { 
        usuario_Nombre : '',
        celular:'',
        correo:'',
        contrasena:'',
        mostrar:false,
        dataincorrecta: false

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
//validacion de campos
//campo vacio
//hacer cuando envie respuesta si es ok q no hayga error

sendval= (e) => {

        const mostrar = this.state.mostrar
        var datos = {
          nombre: this.state.usuario_Nombre,
          celular: `+51${this.state.celular}`,
          correo: this.state.correo,
          contrasenia:  this.state.contrasena}

        console.log(datos)



        e.preventDefault();
        axios({
          method:'post',
          url:'registrar',
          data:datos
        }).then(response =>{
            console.log("la respuesta es ", response)
            this.props.mifuncion(mostrar)
            
        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
            console.log("credenciales incorrectas intente nuevamente")



          this.setState({
            dataincorrecta : true
          })
          //poner si existes correo existente o celularz
          //credenccial no correctas
          //contraseña mayor a 4 digistos
          //poner igual el codeverificacion -- 
          //cuando verifique el codigo redireccione a login
        })

}

sendtootro = (e) => {
  const mostrar = this.state.mostrar

  console.log("se dio click")
 //this.props.mifuncion(mostrar)

  window.location.href='/Loginpage'

}


    render() { 

        return ( 
            <div className="contformulariotecnico2">
              {
                this.state.dataincorrecta === false ? 

                                    <form onSubmit={this.sendval}>  
                                    <div>
                                    <p onClick={this.sendtootro}>Registro</p>
                                      <TextField id="input-with-icon-grid" label="Nombre" required fullWidth value={this.state.usuario_Nombre} onChange={this.usuariohandler}/>
                        
                                    </div>
                        
                                    <div>
                                      <br />
                                      <TextField id="input-with-icon-grid" label="Celular"  type="number" fullWidth value={this.state.celuar} onChange={this.celularhandler}/>
                        
                                    </div>
                        
                                    <div>
                                      <br />
                                      <TextField id="input-with-icon-grid" label="Correo" required type="email" fullWidth value={this.state.correo} onChange={this.correohandler}/>
                        
                                    </div>
                        
                                    <div>
                                      <br />
                                      <TextField id="input-with-icon-grid" label="Contraseña" type="password" required fullWidth value={this.state.contrasena} onChange={this.contrasenahandler}/>
                        
                                    </div>
                                    <br />
                        
                            
                        
                                  {/**
                                    *  <input type="submit" value="Registrar"/>
                                    */}
                        
                                    <Button variant="contained" color="secondary" type="submit"  fullWidth>
                                      Registrar
                                  </Button>

                                    </form>
    
                : 
                                  <form onSubmit={this.sendval}>  
                                  <div>
                                  <p >Registro</p>
                                    <TextField id="input-with-icon-grid" label="Nombre" required fullWidth value={this.state.usuario_Nombre} onChange={this.usuariohandler}/>
                      
                                  </div>
                      
                                  <div>
                                    <br />
                                    <TextField id="input-with-icon-grid" label="Celular"  type="number" fullWidth value={this.state.celuar} onChange={this.celularhandler}/>
                      
                                  </div>
                      
                                  <div>
                                    <br />
                                    <TextField id="input-with-icon-grid" label="Correo" required type="email" fullWidth value={this.state.correo} onChange={this.correohandler}/>
                      
                                  </div>
                      
                                  <div>
                                    <br />
                                    <TextField id="input-with-icon-grid" label="Contraseña" type="password" required fullWidth value={this.state.contrasena} onChange={this.contrasenahandler}/>
                      
                                  </div>
                                  <br />
                      
                          
                      
                                {/**
                                  *  <input type="submit" value="Registrar"/>
                                  */}
                      
                                  <Button variant="contained" color="secondary" type="submit"  fullWidth>
                                    Registrar
                                </Button>
                                <br />

                                <br />
                                <br />

                                <Alert severity="warning">Algunas credenciales son incorrectas intente nuevamente </Alert>

                                  </form>
    

              }
             
        {/*asda
        
             <form onSubmit={this.sendval}>  
           <TextField id="input-with-icon-grid" label="Nombre" name="aea" required fullWidth />
           
           <input type="email" required></input>
          <input type="submit" />
           </form>
        */}
      
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