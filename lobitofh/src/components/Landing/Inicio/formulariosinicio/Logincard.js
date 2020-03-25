import React, { Fragment, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../../../../utils/axios';
import { withStyles } from '@material-ui/core/styles';

class Codeverificationcard extends Component {
    state = {
        corre_celular : "",
        passwords:""
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
        })
    }
    render() {
        console.log("amigooooooooooooooooooooooooooooooooooo")

        return (
            <Fragment>
                <div className="contformulariotecnico2">
                <br/>
                <br/>

                <div>
                <TextField id="input-with-icon-grid" label=" Correo / N umero celular" fullWidth value={this.state.corre_celular} onChange={this.corre_celularhandler} />

                </div>
                <br/>
                <br/>
                <br/>

                <div>

                <TextField id="input-with-icon-grid" label="Contraseña" type="password" fullWidth value={this.state.passwords} onChange={this.passwordhandler} />

                </div>
                <br/>
                <br/>
                <br/>

                    <Button variant="contained" color="secondary" onClick={this.checkLogin} fullWidth>
                        Ingresar
                    </Button>
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