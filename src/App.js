import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Welcome from './pages/Welcome/index';
import About from './pages/About/index';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/About" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
