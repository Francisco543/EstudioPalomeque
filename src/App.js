import React from 'react';
import AppContainer from './components/AppContainer'

import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Preloader from './components/PreLoader';
import Especializaciones from './components/Especializaciones';
import Contacto from './components/Contacto';

function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component = {Preloader}/>
      <Route exact path="/app" component = {AppContainer}/>
      <Route exact path="/AreasDePractica" component = {Especializaciones}/>
      <Route exact path="/Contacto" component = {Contacto}/>
    </Switch>
  </Router>
    
    
  );
}

export default App;
