import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



var solicitud = [
  {t_problema: 'pc lenta', precio: 20, estado:' pagado'},
  {t_problema: 'Virus', precio: 10, estado:' no pagado'},
  {t_problema: 'Formatero', precio: 40, estado:' no pagado'},
  {t_problema: 'Licencia', precio: 30, estado:' pagado'},
  {t_problema: 'impresora', precio: 50, estado:' pagado'},
]

/*
*/


class SolicitudesHistorial extends Component {
  constructor(props){
    super(props);
    this.state = {
      soldado: [],
      isLoaded: false,
    }
    }
    
    componentDidMount(){
    
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(res => res.json())
          .then(json => {
                this.setState({
                  isLoaded: true,
                  items: json,
                })
          })
    
    }
  render(){
    var {isLoaded, items} = this.state;
    if(!isLoaded){
        return(
          <div>
            problema con la conexion
          </div>
        )
    }else{
    return(
      <div>
      {
        items.map((items,i) => {
return(
  <Card className={this.props.classes.card}>
      <CardActionArea>
        <CardMedia
          className={this.props.classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {items.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {items.email}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
)
        })
      }
    </div>

    )
  
    
    }
  }
}


export default withStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
})(SolicitudesHistorial)
