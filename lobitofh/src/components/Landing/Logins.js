import React, {Component,Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
class Login extends Component{
    render(){
        return(
            <div className={this.props.classes.root}>
            <Grid container spacing={3}>
              
              
              <Grid item xs={6} sm={6}>
                <Paper className={this.props.classes.paper}>

                </Paper>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Paper className={this.props.classes.paper}>
                <div className="frmregistro">
        <Typography>
          Inicie Sesion
        </Typography>

        <TextField fullWidth

        className={this.props.classes.textField}
        id="outlined-full-width"
          label="Numero Telefonico"
          style={{ margin: 8, 
                    marginTop: 40}}
          placeholder="Numero Telefonico"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         <TextField
        className={this.props.classes.textField}
        id="outlined-full-width"
          label="Contraseña"
          style={{ margin: 8 , 
            marginTop: 40}}
          placeholder="Contraseña"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        
      </div>

      <Button variant="contained" color="secondary">
        Registrese
      </Button>
                </Paper>
              </Grid>
            </Grid>
          </div>
        )
    }
}
export default withStyles(theme =>({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}))(Login);