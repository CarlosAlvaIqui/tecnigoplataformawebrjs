import React, { useState,useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/csscarrousel.css"
import Tryhis from './Trythis';
import Slider from "react-slick";

function App(){

  const [suggestions,setSuggestion]=useState([])

 useEffect(() =>{
   fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
      setSuggestion(data);
    })

 });
 let settings ={
   infinite:false,
   speed:1000,
   arrows:true,
   slidesToShow:5,
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
 

    return (

        
      <React.Fragment>
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
                                 <button className="btn btn-sm follow btn-primary" >followme</button>
                            </div>
                          </div>
                      </div>
                  ))}
              </Slider>
            )}
      </div>
            <Tryhis 
            
            />
      </React.Fragment>
    );
  
}
export default App;
