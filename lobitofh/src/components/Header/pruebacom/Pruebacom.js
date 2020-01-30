import React from 'react';
import Carrouselts from '../../Reactivescom/Carrouselts';

import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
    /* const pregarra = (props.location.aboutprops) 
     const trans = JSON.parse(pregarra)
     console.log(trans.preguntas)*/

     const useStyles = makeStyles(theme => ({
        root2: {
          flexGrow: 1,
        },
        paper: {
          padding: theme.spacing(2),
          textAlign: 'center',
          color: theme.palette.text.secondary,
        },

      }));

      const GreenCheckbox = withStyles({
        root: {
          color: green[400],
          '&$checked': {
            color: green[600],
          },
        },
        checked: {},
      })(props => <Checkbox color="default" {...props} />);

const Details = (props) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
      });
    
      const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
      };

    console.log(props.location.aboutprops)
    const pregarra = (props.location.aboutprops)
if(pregarra == null){
console.log("el pregrarra dice gaaa")
}else {
    var id_preg = pregarra['preguntas']
    console.log(pregarra['preguntas'])


    
    switch (id_preg) {
        case 1:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]
            break;
        case 2:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 3:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 4:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 5:
            var preguntassd =[{question:'Salen anuncion sin parar'},{question:'Desaparecen archivos'},{question:'Deje a mi mamá con la pc'}]

            break;
        case 6:
            var preguntassd =[{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 7:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 8:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 9:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

            break;
        case 10:
            var preguntassd = [{question:'Aqui hay lag'},{question:'otro lag'},{question:'lag x 2'}]

         break;
        default:
            console.log("ocurrio un error")
        break;
    }


}
    return (

<div className={classes.root2}>
<h1>Estos son los detalles</h1>
 
<Grid container spacing={3}>

  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>xs=12 sm=6</Paper>
  </Grid>
  <Grid item xs={12} sm={6}>
    <Paper className={classes.paper}>
    {
        preguntassd.map((preguntitas, i) =>{
                return(
                    <FormControlLabel
                    control={
                      <GreenCheckbox
                        checked={state.checkedG}
                        onChange={handleChange('checkedG')}
                        value='algo'
                      />
                    }
                    label={preguntitas.question}
                  />
                )
        })
    }
    </Paper>
  </Grid>

</Grid>
</div>

    );
};

export default Details;
/*
     {
          preguntas.map((preguntitas, i) =>{
            return(
                <FormControlLabel
        control={
          <GreenCheckbox
            checked={state.checkedG}
            onChange={handleChange('checkedG')}
            value={preguntitas[i]}
          />
        }
        label="Custom color"
      />
            )
          })
      } */