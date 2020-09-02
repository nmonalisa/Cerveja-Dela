import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/Home';
import Cervejas from './Pages/Cervejas/Cervejas';
import Sobre from './Pages/Sobre/Sobre';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/cervejas'>
          <Cervejas />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
