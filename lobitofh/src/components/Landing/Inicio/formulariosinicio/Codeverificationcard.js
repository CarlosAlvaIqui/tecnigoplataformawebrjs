import React, { Fragment, Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from '../../../../utils/axios';
import { withStyles } from '@material-ui/core/styles';

class Codeverificationcard extends Component {
    state = {
        codecuenta : "",
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

                        <TextField id="input-with-icon-grid" label="Codigo de Cuenta" fullWidth value={this.state.codecuenta} onChange={this.codecuentahandler} />

                    </div>
                <br/>
                <br/>
                <br/>


                    <Button variant="contained" color="secondary" onClick={this.validateaccount} fullWidth>
                        Activar Cuenta
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