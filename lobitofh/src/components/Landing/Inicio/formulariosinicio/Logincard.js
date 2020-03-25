import React, { Fragment, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../../../../utils/axios';
import { withStyles } from '@material-ui/core/styles';
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from 'react-router-dom';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class Codeverificationcard extends Component {
    state = {
        corre_celular : "",
        passwords:"",
        dataincorrecta: false

    }
    corre_celularhandler = (e) => this.setState({

        corre_celular: e.target.value
      })
      passwordhandler = (e) => this.setState({

        passwords: e.target.value
      })


      checkLogin = (e) => {

/**
 *  "nombre": "toledo",
      "celular": "+51953219521",
      "correo": "lolaiudameas@gmail.com",
      "contrasenia": "tecsup12345"
 */
 var logindata = {
    nombreUsuario: this.state.corre_celular,
    contrasenia: this.state.passwords,
  }
  console.log(logindata)

        e.preventDefault();
        axios({
          method:'post',
          url:'autenticar',
          data:logindata
        }).then(response =>{
            console.log("la respuesta es ", response)
            //almacenar token en localstorage
        }).catch(error => {
            console.log("hay error yano quiero vivirs ", error)
            this.setState({
                dataincorrecta : true
              })
        })
    }
    render() {
        console.log("amigooooooooooooooooooooooooooooooooooo")

        return (
            <Fragment>

                
                <div className="contformulariotecnico2">
                <br/>
                <br/>
                {
                    this.state.dataincorrecta === false ?

                    <form onSubmit={this.checkLogin}>  

                                        <div>
                                        <TextField id="input-with-icon-grid" required label=" Correo / Numero celular" fullWidth value={this.state.corre_celular} onChange={this.corre_celularhandler} />

                                        </div>
                                        <br/>
                                        <br/>
                                        <br/>

                                            <div>

                                            <TextField id="input-with-icon-grid" required label="Contraseña" type="password" fullWidth value={this.state.passwords} onChange={this.passwordhandler} />

                                            </div>
                                            <br/>
                                            <br/>
                                            <br/>

                                        <Button variant="contained" color="secondary" type="submit" fullWidth>
                                            Ingresar
                                        </Button>
                    </form> 
                    :
                    <form onSubmit={this.checkLogin}>  

                                                <div>
                                                <TextField id="input-with-icon-grid" required label=" Correo / Numero celular" fullWidth value={this.state.corre_celular} onChange={this.corre_celularhandler} />

                                                </div>
                                                <br/>
                                                <br/>
                                                <br/>

                                                    <div>

                                                    <TextField id="input-with-icon-grid" required label="Contraseña" type="password" fullWidth value={this.state.passwords} onChange={this.passwordhandler} />

                                                    </div>
                                                    <br/>
                                                    <br/>
                                                    <br/>

                                                <Button variant="contained" color="secondary" type="submit" fullWidth>
                                                    Ingresar
                                                </Button>
                                                <br />
                                                <br/>

                                                <Alert severity="warning">Algunas credenciales son incorrectas intente nuevamente </Alert>

                    </form> 


                }

                </div>
            </Fragment>

        );
    }
}

export default withStyles(theme => ({

    textField: {
  
      width: 320,
      backgroundColor: 'white'
    },
  
  }
  ))(Codeverificationcard);