import React, {Component} from 'react';
import aimage from '../../assets/img/aimage.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      maxWidth: 170,
      marginLeft: '93px',
    },
 
  });
class Exradiusimg extends Component {
    render(){

        return(
            <div>
              <img src={aimage} alt="Paris" className="miradio" width="100" height="100"/>      
            <center>
            <p>ejemplo</p>
            
            </center>
          
            </div>
        )
    }
}

export default Exradiusimg;