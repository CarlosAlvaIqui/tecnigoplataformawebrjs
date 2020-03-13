import React, { Component } from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PruebaCom from './components/Header/pruebacom/Pruebacom';
import Inicio from './components/Landing/Inicio/Inicio';
import Solicitudes from './components/Reactivescom/SolicitudesHistorial'
import Serviceslanding from './components/Landing/Serviceslanding';
import Tablahistorial from './components/Reactivescom/Tablahistorial';
import Detailswork from './components/Landing/Detailswork';
import Newtablehistorial from './components/Landing/Newtablehistorial';
import Tecnicoform from './components/Landing/Tecnicoform';
import Blog from './components/Landing/Blog'
class App extends Component{
 render() {
   return(
<BrowserRouter>
    <Layout>
      <Switch>
      <Route path='/' exact component={Inicio}/>
      <Route path='/Tablahistorial' exact component={Tablahistorial}/>
      <Route path='/Details' exact component={PruebaCom}/>
      <Route path='/Serviceslanding' exact component={Serviceslanding}/>
      <Route path='/Solicitudes' exact component={Solicitudes}/>
      <Route path='/Detailswork' exact component={Detailswork}/>
      <Route path='/Newtablehistorial' exact component={Newtablehistorial}/>
      <Route path="/Tecnicoform" exact component={Tecnicoform}/>
      <Route path="/Blog" exact component={Blog}/>

      </Switch>
    </Layout>
</BrowserRouter>
   );
 }
}

export default App;
