import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import anyimage from '../../assets/img/lets.png';
import cssgeneral from '../../assets/css/cssgeneral.css'
import { Typography } from '@material-ui/core';



class Registro extends Component {

  render() {

    return (
      <Grid  className="contfrm">
        <Grid item xs={12} className="gridCon">
          <p className="tituloregistro">TecniGO</p>
          <Grid  className="frmre">
            <Paper className={this.props.classes.paper}>

            <div className={this.props.classes.root}>


<div className="frmregistro">
<p>
Registro

</p>
  <div>
    <p className={this.props.classes.spa}>Email</p>
    <TextField
      id="outlined-full-width"
      style={{
        margin: 0,
      }}
      placeholder="Correo Electronico"
      fullWidth 
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>

  <div>
    <p className={this.props.classes.spa}>Nombre</p>
    <TextField
      id="outlined-full-width"
      style={{ margin: 0 }}
      placeholder="Nombre"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
  <div>
    <p className={this.props.classes.spa}>Contraseña</p>
    <TextField
      id="outlined-full-width"
      style={{ margin: 0 }}
      placeholder="Contraseña"
      fullWidth
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
  <div>
    <p className={this.props.classes.spa}>Telefono</p>

    <TextField
      fullWidth

      id="outlined-full-width"
      style={{
        margin: 8,
      }}
      placeholder="Numero Telefonico"
      margin="normal"
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
    />
  </div>
</div>
</div>
<Button variant="contained" color="secondary">
              Registrese
            </Button>

          </Paper>
          </Grid>
        </Grid>




      </Grid>

    )
  }
}

export default withStyles(theme => ({
  button: {
    backgroundColor: 'red'
  },
  root: {
    flexGrow: 1,

  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  textField: {

    width: 320,
    backgroundColor: 'white'
  },
  spa: {
    marginTop: 15,
    marginRight: 250,
  }
})
)(Registro);


/*

     <Grid item xs={12} sm={6} >
          <Paper className={this.props.classes.paper} >

            <div className={this.props.classes.root}>


              <div className="frmregistro">
                <Typography>
                  Registro
        </Typography>
                <div>
                  <p className={this.props.classes.spa}>Email</p>
                  <TextField
                    className={this.props.classes.textField}
                    id="outlined-full-width"
                    style={{
                      margin: 0,
                    }}
                    placeholder="Correo Electronico"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>

                <div>
                  <p className={this.props.classes.spa}>Nombre</p>
                  <TextField
                    className={this.props.classes.textField}
                    id="outlined-full-width"
                    style={{ margin: 0 }}
                    placeholder="Nombre"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div>
                  <p className={this.props.classes.spa}>Contraseña</p>
                  <TextField
                    className={this.props.classes.textField}
                    id="outlined-full-width"
                    style={{ margin: 0 }}
                    placeholder="Contraseña"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div>
                  <p className={this.props.classes.spa}>Telefono</p>

                  <TextField
                    fullWidth

                    className={this.props.classes.textField}
                    id="outlined-full-width"
                    style={{
                      margin: 8,
                    }}
                    placeholder="Numero Telefonico"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </div>
              </div>
            </div>
            <Button variant="contained" color="secondary">
              Registrese
            </Button>
          </Paper>
        </Grid>

*/