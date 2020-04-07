import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import SecondLayout from './hoc/Layout/SecondLayout';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';
import PruebaCom from './components/Header/pruebacom/Pruebacom';
import Inicio from './components/Landing/Inicio/Inicio';
import Init from './components/Landing/Inicio/Inicio';

import Solicitudes from './components/Reactivescom/SolicitudesHistorial'
import Serviceslanding from './components/Landing/Serviceslanding';
import Tablahistorial from './components/Reactivescom/Tablahistorial';
import Detailswork from './components/Landing/Detailswork';
import Newtablehistorial from './components/Landing/Newtablehistorial';
import Tecnicoform from './components/Landing/Tecnicoform';
import Blog from './components/Landing/Blog';
import Loginpage from './components/Landing/Inicio/Loginpage';


class App extends Component{
//<Link className="nav-bar-brand" to={{ pathname: '/Details', aboutprops: { preguntas: servicios.preg } }}>

 render() {
   return(
   <BrowserRouter>

    <Layout>
      <Switch>
          <Route path='/' exact component={Inicio}/>
          <Route path='/Tablahistorial'  component={Tablahistorial}/>
          <Route path='/Details'  component={PruebaCom}/>
          <Route path='/Serviceslanding'  component={Serviceslanding}/>
          <Route path='/Solicitudes'  component={Solicitudes}/>
          <Route path='/Detailswork/:id'  component={Detailswork}/>
          <Route path='/Newtablehistorial'  component={Newtablehistorial}/>
          <Route path="/Tecnicoform"  component={Tecnicoform}/>
          <Route path="/Blog"  component={Blog}/>
          <Route path="/Loginpage"  component={Loginpage}/>  
         
          <Route path="/Logout" render={() => {
            localStorage.removeItem('tokenuser')
            localStorage.removeItem('data_user')
            return <Redirect to="/" />
          }}/>  
          
      </Switch>
    </Layout>



</BrowserRouter>

   );
 }
}

export default App;
