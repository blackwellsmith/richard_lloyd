import React from 'react';
import Nav from './Navigation'
import home from './Home.js';
import images from './Images.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/gallery" component={images} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
