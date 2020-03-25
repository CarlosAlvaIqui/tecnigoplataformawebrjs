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
        codecuenta : "",
        dataincorrecta: false

    }
    codecuentahandler = (e) => this.setState({
        codecuenta: e.target.value
      })
    
    validateaccount = (e) => {
        var codex = this.state.codecuenta
        console.log(codex)
        e.preventDefault();
        axios({
          method:'get',
          url:`activar?key=${codex}`,
        }).then(response =>{
            console.log("la respuesta es ", response)

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
                  <form onSubmit={this.validateaccount}>  

                                        <div>

                                            <TextField id="input-with-icon-grid" type="number"  label="Codigo de Cuenta" fullWidth value={this.state.codecuenta} onChange={this.codecuentahandler} required/>

                                        </div>

                                    <br/>
                                    <br/>
                                    <br/>


                                        <Button variant="contained" color="secondary" type="submit" fullWidth>
                                            Activar Cuenta
                                        </Button>
                    </form>   



                  :


                  <form onSubmit={this.validateaccount}>  

                                                <div>

                                                    <TextField id="input-with-icon-grid" type="number"  label="Codigo de Cuenta" fullWidth value={this.state.codecuenta} onChange={this.codecuentahandler} required/>

                                                </div>

                                            <br/>
                                            <br/>
                                            <br/>


                                                <Button variant="contained" color="secondary" type="submit" fullWidth>
                                                    Activar Cuenta
                                                </Button>
                                                <br />

                                                <br />
                                                <br />

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