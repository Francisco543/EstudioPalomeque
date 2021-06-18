import React,{Fragment} from 'react';
import AppContainer from './components/AppContainer'

import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom';
import Preloader from './components/PreLoader';

function App() {
  return (
    
    <Router basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component = {Preloader}/>
      <Route exact path="/app" component = {AppContainer}/>
    </Switch>
  </Router>
    
    
  );
}

export default App;
