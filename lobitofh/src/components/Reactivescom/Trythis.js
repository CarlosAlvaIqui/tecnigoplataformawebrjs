import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Youtubes from 'react-youtube';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Trythis = (props) => {
   // var x = "https://www.youtube.com/embed/uYlIEIR4A3k";
   // <button onClick={videochaned}>cambiame le video plox</button>

  /* function videochaned(){
        var anoth ="https://www.youtube.com/embed/dBlBpXWLKcA";
        miactuvi(anoth)
        console.log("cambiaso")
    }
        const [mipropvi,miactuvi] = useState("https://www.youtube.com/embed/uYlIEIR4A3k");

    */

    console.log(props.vidsend + "este prop tiene algo raro we")
    const classes = useStyles();
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return(
     <div>
         {props.vidsend === "" ?(
               <div className={classes.root}>
               <Grid container spacing={3}>
      
      <Grid item xs={12} sm={12}>
           <div className={classes.paper}>
{ /**
           <p>gaaa{props.senthis}</p>
 */}
<         iframe className="ifravideo" src={"https://www.youtube.com/embed/gn_SVvY68lE"} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Mivideos"></iframe>
  {/**
   *     <Youtubes
        videoId="_nBlN9yp9R8"
        opts={opts}

      />
   */}
           </div>
            </Grid>
    
        </Grid>
        </div>
         ):(
        
       <div className={classes.root}>
           <Grid container spacing={3}>
      
      <Grid item xs={12} sm={12}>
           <div className={classes.paper}>
           <p>gaaa{props.senthis}</p>
         
           <iframe className="ifravideo" src={props.vidsend} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Mivideos"></iframe>
    
           </div>

      </Grid>
    
    </Grid>
        </div>
     )}
    </div>
    )
}

export default Trythis;