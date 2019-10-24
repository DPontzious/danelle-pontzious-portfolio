import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Welcome from './pages/Welcome/index';
import About from './pages/About/index';
import Contact from "./pages/Contact/index"
import Portfolio from "./pages/Projects/index"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;


