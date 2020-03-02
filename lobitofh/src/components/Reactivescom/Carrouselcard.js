import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/csscarrousel.css";
import Tryhis from './Trythis';
import Slider from "react-slick";

function App(){

  const [suggestions,setSuggestion]=useState([]);
  const [psprop,Setpropst]=useState("");
  const [videosyt,Setvidyt]=useState({

    videos: [
      { nombre: 'Pc lenta', srcvi: 'https://www.youtube.com/embed/dBlBpXWLKcA' ,id: 1 },
      { nombre: 'Recuperar I.', srcvi: 'https://www.youtube.com/embed/6t7HZLP3qKI', id:2  },
      { nombre: 'Licencia', srcvi: 'https://www.youtube.com/embed/tgkxSkF7QOU' ,id:3},
      { nombre: 'Impresora', srcvi:'https://www.youtube.com/embed/x4-0aU4us_w' ,id:4},
      { nombre: 'Virus', srcvi: 'https://www.youtube.com/embed/fxZFP4e8VaA', id:5},
      { nombre: 'Internet', srcvi:'https://www.youtube.com/embed/bgo9dJB_icw', id:6},
      { nombre: 'No Responde ', srcvi:'https://www.youtube.com/embed/diuexInkshA', id:7 },
      { nombre: 'Instalacion ', srcvi:'https://www.youtube.com/embed/TyltLy8lDPs', id:8},
      { nombre: 'Limpieza', srcvi: 'https://www.youtube.com/embed/TgbqBx4NthI', id:9},
      { nombre: 'Saturacion', srcvi: 'https://www.youtube.com/embed/EmuBOfurv3o ', id:10},
    ]
  })

  const [psvid,Setpsvid]=useState("");


 useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
      setSuggestion(data);
    })  
 });

 let settings ={
   infinite:false,
   speed:1000,
   arrows:true,
   slidesToShow:4,
   slidesToScroll:4,
   responsive:[
    {
          breakpoint:960,
          settings:{
            slidesToShow:3,
            slidesToScroll:2,
          }
    },
    {
      breakpoint:480,
    settings:{
      slidesToShow:1,
      slidesToScroll:1,
          }
    },
  ]}
 
  function miconsole (current)  {
console.log("bota el real gaa : " + current.username)
var xd =current.username
Setpropst(xd)
console.log(psprop)
};
function mivideo (vin)  {
  console.log("Video gaa : " + vin.nombre)
  var vilo = vin.srcvi
Setpsvid(vilo)
console.log(psvid)
  };
    return (

        
      <React.Fragment>
{ /*
      <div className="container">
          <h6 className="text-muted">Friend Sugestions</h6>
          {
            suggestions.length===0?(
              <div className="spinner-border" role="status">
                    <span className="sr-only">Loading..wait</span>
                </div>
            ):(
              <Slider {...settings}>
                  {suggestions.map(current=>(
                   
                     <div className="out" key={current.id}> 
                          <div className="card">
                            <img className="rouded-circle" alt={"users here"} src={`https://source.unsplash.com/random/${current.id}`}  height={56} width={100}/>
                            <div className="card-body">
                                 <h5 className="card-title">{current.username}</h5>
                                 <small className="card-text text-sm-center text-muted">Inicio</small>
                                 <br/>
                                 <button className="btn btn-sm follow btn-primary" onClick={() => miconsole(current)}>followme</button>
                            </div>
                          </div>
                      </div>
                  ))}
              </Slider>
            )}
      </div>
*/
                  }
      <div className="container">
          <h6 className="text-muted">Friend Sugestions</h6>
          {
         
              <Slider {...settings}>
                  {
                    videosyt.videos.map(vin =>(
                   
                      <div className="out" key={vin.id}> 
                           <div className="card">
                             <img className="rouded-circle" alt={"users here"} src={`https://source.unsplash.com/random/${vin.id}`}  height={90} width={180}/>
                             <div className="card-body">
                                  <h5 className="card-title" onClick={() => mivideo(vin)}>
                                  <button className="zahando">{vin.nombre}</button>

                                  </h5>
                                  <small className="card-text text-sm-center text-muted"><span >TecniGo</span><br/><span>20 marzo del 2020</span></small>
                                  {
                                    /**
                                     *<button className="btn btn-sm follow btn-primary" onClick={() => mivideo(vin)}>followme</button>

                                     */
                                  }
                             </div>
                           </div>
                       </div>
                   ))
                    }
              </Slider>
            }
      </div>
        <Tryhis 
        senthis={psprop}
        vidsend={psvid}
        />
      </React.Fragment>
    );
  
}
export default App;
