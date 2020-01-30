import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { render } from '@testing-library/react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import PruebaCom from './components/Header/pruebacom/Pruebacom';
import Landing from './components/Landing/Landing';
import Landrefix from './components/Landing/Landrefix';
import lmrema from './components/Landing/lmremaking';
import Registro from './components/Landing/Registro';
import Solicitudes from './components/Reactivescom/SolicitudesHistorial'
import Login from './components/Landing/Logins';
import Serviceslanding from './components/Landing/Serviceslanding';
class App extends Component{
 render() {
   return(
<BrowserRouter>
    <Layout>
      <Switch>
      <Route path='/' exact component={Landing}/>
      <Route path='/Details' exact component={PruebaCom}/>
      <Route path='/ldrefix' exact component={Landrefix}/>
      <Route path='/lmrema' exact component={lmrema}/>
      <Route path='/Registro' exact component={Registro}/>
      <Route path='/Solicitudes' exact component={Solicitudes}/>
      <Route path='/Login' exact component={Login}/>
      <Route path='/Serviceslanding' exact component={Serviceslanding}/>

      </Switch>
    </Layout>
</BrowserRouter>
   );
 }
}

export default App;
