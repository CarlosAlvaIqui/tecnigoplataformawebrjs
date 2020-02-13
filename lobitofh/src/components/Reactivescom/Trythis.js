import React,{useState} from 'react';



const Trythis = (props) => {
    var x = "https://www.youtube.com/embed/uYlIEIR4A3k";
    const [mipropvi,miactuvi] = useState("https://www.youtube.com/embed/uYlIEIR4A3k");

   function videochaned(){
        var anoth ="https://www.youtube.com/embed/dBlBpXWLKcA";
        miactuvi(anoth)
        console.log("cambiaso")
    }
    return(
        <div>
            {
            }
<p>gaaa{props.senthis}</p>
        <button onClick={videochaned}>cambiame le video plox</button>
<iframe width="560" height="315" src={mipropvi} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Trythis;