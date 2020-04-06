import React,{Component,Fragment} from 'react'
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import perfilphoto from '../../assets/img/hppisfree.jpg';
import { Link } from 'react-router-dom';


import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Contai from 'react-bootstrap/Container';
import {Row,Col, Alert} from 'react-bootstrap';
import tecnigoblanco from '../../assets/img/icons/logotecnigoblanco2.png';
import axios from '../../utils/axios';
import { CulqiProvider, Culqi } from "react-culqi";



class Detailswork extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        id:this.props.match.params.id,
        data_servicio: [],
        nombre: '',
        detalle: '',
        total: 1000.00

    }

  }
componentWillMount(){
  
  console.log("shit")
}
  componentDidMount(){
console.log("estamos en detail work")
console.log(this.state.id)




axios({
  method:'get',
  url:`solicitudes/detalle/${this.state.id}`,
  headers:{
    Authorization: `Bearer `+localStorage.getItem('tokenuser')
  }
}).then(response =>{
  console.log(">>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<")
  console.log(response)

  var datadetallada = response.data
  if(datadetallada){
    this.setState({
      nombre: datadetallada.nombre,
      detalle: datadetallada.detalle,
      data_servicio: datadetallada,
      total: datadetallada.total
      
    })
  }

}).catch(error => {
    console.log("hay error yano quiero vivirs ", error)

})
  }

  render() { 
    console.log(this.state.data_servicio)
    console.log(this.state.nombre)
    console.log(this.state.total)
    var precioloco = this.state.total
    console.log(precioloco)
    return ( 
      <Fragment>
 <div className="tecgofon">
          <div className="miscontaine">
          <Grid container spacing={3}  >
   
       
                  <Grid item xs={12} sm={7}>
                  < p className="tittletec"><img src={tecnigoblanco} style={{width:70}} alt="logotecnigo"/>TecniGo</p>

                  </Grid>
                  <Grid item xs={12} sm={3} >
                    
                  <Paper className="recivocss">
                 <p>
                      <strong>
                        Tu pedido
                      </strong>
                    </p>
               
                   <Row>
                      <Col  sm={7}><p><strong>{this.state.data_servicio.nombre}</strong></p><p className="cssdescrip">Al abrir los programas</p></Col>
    <Col  sm={5}><p className="preciossc">{`$${this.state.data_servicio.precio}`}</p></Col>
                  </Row>
                  <hr className="hrstyledeta"/>
                          {/**
                           * 
                                            <Row>
                                                <Col sm={7}><p><strong>Formateo de PC</strong></p><p className="cssdescrip">Instalar todos los programas necesarios</p></Col>
                                                <Col sm={5}><p className="preciossc">$60.00</p></Col>
                                            </Row>
                                            <hr className="hrstyledeta"/>

                                          
                          */}
                   <div>
                      <br/>
                      <Row>
                      <Col sm={7}><p><strong>Total =></strong></p></Col>
                     {/**<Col sm={5}>$120.00</Col> */}
    <Col sm={5}>{`$${this.state.data_servicio.total}`}</Col>
                  </Row>
                    </div>

                  </Paper>

                  </Grid>
                  

      </Grid>
          </div>
      </div>
 
      <div>
        <CssBaseline />
        <Container maxWidth="md">
          <Typography component="div" style={{}}>
            <Grid container spacing={3}>

              <Grid item xs={12} sm={7}>
                <p>
                  <strong className="titlebig">
                    Detalle del trabajo
                    </strong>
                </p>
                <br />

                <div>
                  <p>
                    <strong className="titlespace">
                      Lugar del trabajo a realizar
            </strong>
                    <br />
                    <span className="mispa">
                      Establece la direccion exacta
            </span>
                  </p>
                  <div className="divradi">
                  <Row>
                      <Col sm={4}><span><strong>Calle</strong></span><br/>
                     {/** <span>Av Ejercito...</span>*/} 
                      <span>{this.state.data_servicio.direccion}</span>
                      </Col>
                      <Col sm={6}><span><strong>Datos(piso, puerta...)</strong></span><br/>
                      {/** <span>Sin Datos</span> */}
                      <span>{this.state.data_servicio.referencia}</span>
                      </Col>
                      <Col sm={2}><span></span><br/><span>Editar</span></Col>
                  </Row>
                  </div>
                  
                </div>

                <br />
                <br />


                <div>
                  <p>
                    <strong className="titlespace">
                      Hora
            </strong>
                    <br />

                    <span className="mispa">
                      Hora programada
            </span>
                  </p>
                  <div className="divradi">
                  <Row>
                      <Col sm={10}><span><strong>Fecha y Hora</strong></span><br/>
                     {/**<span>Viernes 31 de enerero del 2020</span>
 */}
                      <span></span>
                      </Col>

                      <Col sm={2}><span></span><br/><span></span>{/** <span>15:00</span>*/}</Col>
                  </Row>

               

                  </div>
                </div>

                <br />
                <br />

                <div>
                  <p>
                    <strong className="titlespace">
                      Datos del tecnico
                        </strong>
                    <br />

                    <span className="mispa">
                      Revisa los datos del tecnico
                        </span>
                  </p>
                  {
                    this.state.data_servicio.asignado == false ?
                 
                    <p></p>
                    :

                    <div className="cartatecnico">
                    <div className="headercard">
                      <p>TecniGO</p>
                    </div>
               
                    <Row className="contte">
                      <Col sm={6} className="tecper"><img src={perfilphoto} style={{ width: 150 }} alt="tecnico"/></Col>
                      <Col sm={6}>
                      <div className="datat">
                                            <p className="mite">Tecnico en Computacion</p>
                                            <p className="mite">28 Años</p>
                                            <p className="mite">Dtuma.torres@gmail.com</p>
                                            <p className="mite">963258753 - 963254178</p>
                                                    <Box component="fieldset" mb={3} borderColor="transparent">
                                                      <Rating
                                                        name="customized-empty"
                                                        defaultValue={2}
                                                        precision={0.5}
                                                        emptyIcon={<StarBorderIcon fontSize="inherit" />}
                                                      />
                                                      <br/>
                                                      <Button variant="contained" color="secondary">
                                                        Calificar
                                                      </Button>

                                                    </Box>

                                                  </div>
                      </Col>
                      <div className="centerthis">
                                <hr />
                                <p >El hombre se esta poniendo la soga al cuello</p>
                                <hr />
                              </div>

                  </Row>
        </div> 

                             
                    }
                </div>
            
                      
              

                

                <br />
                <br />


                <div>
                  <p>
                    <strong className="titlespace">
                      Pago
                     </strong>
                    <br />

                    <span className="mispa">
                      Realizar el pago
                   </span>
                  </p>

                <div>
                
                <div  className="btnpaylpal">
                  <Button variant="contained" color="secondary">
              Paypal
            </Button>
           </div>


           <div className="App">
      <CulqiProvider
        publicKey="pk_test_RS3TjLLzskve6gut"
        amount={`${precioloco}`}
        title={`${this.state.data_servicio.nombre}`}
        description={`${this.state.detalle}`}
        onToken={token => {
          console.log("token received", token);
          console.log(this.state.nombre)
        }}
        //
        onError={error => {
          console.error("something bad happened", error);
        }}
        // Uncomment `options` to see customizations take place
        options={{
          style: {
            maincolor: "red",
            buttontext: "black",
            maintext: "darkorange",
            desctext: "pink",
            logo: "//placekitten.com/400/400"
          }
        }}
      >
        <div>
          <Culqi>
            {({ openCulqi, setAmount, amount }) => {
              return (
                <div>
                  <button onClick={openCulqi}>Open Culqi Prompt</button>
                  <button
                    onClick={() => {
                      setAmount(amount + 100);
                    }}
                  >
                    Increase amount by 100
                  </button>
                </div>
              );
            }}
          </Culqi>
        </div>
      </CulqiProvider>
    </div>


               
                </div>
                </div>

                <br />
                <br /><br />

                <div>
                  <p>
                    <strong className="titlespace">
                      Informe
                    </strong>
                    <br />

                    <span className="mispa">
                      Lea el informe
                      </span>
                    <br />
                    <Link className="nav-bar-brand" to={"/"}>
                      <span>Ver Informe</span>
                    </Link>

                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={5}>
              </Grid>
            </Grid>

          </Typography>
        </Container>
      </div>
      </Fragment>
     );
  }
}
 
export default Detailswork;
