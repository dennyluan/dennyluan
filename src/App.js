import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './App.scss';
import About from './About';

const Index = ({}) => {
  return (
    <div id="home">
      <div className="container center">
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div id="pokemans">
              <div id="pikachu"></div>
              <div id="ash"></div>
            </div>
            <h1>Hello!</h1>
            <p>I'm Denny Luan, welcome to my web page.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ul>
              <li>
                <Link to={'chronology'}>About Me</Link>
              </li>

              <li>
                <a href="https://twitter.com/dennyluan">Twitter</a>
              </li>

              <li>
                <a href="https://experiment.com">Experiment</a>
              </li>

              <li>
                <a href="https://research.pizza">Research Pizza</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}



function App() {
  return (
    <Router>
      <div className="App">
        
      </div>

      <Route path="/" exact component={Index}></Route>
      <Route path="/chronology/" component={About}></Route>
    </Router>
  );
}

export default App;
