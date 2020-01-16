import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './hoc/Layout/Layout';
import { render } from '@testing-library/react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import PruebaCom from './components/Header/pruebacom/Pruebacom';
class App extends Component{
 render() {
   return(
<BrowserRouter>
    <Layout>
      <Switch>

      <Route path='/ayaya' exact component={PruebaCom}/>

      </Switch>
    </Layout>
</BrowserRouter>
   );
 }
}

export default App;
