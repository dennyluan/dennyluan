import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div id="home">
        <div className="container center">
          <div className="row">
            <div className="col-xs-12 col-md-12">
              <div id="pokemans">
                <div id="pikachu"></div>
                <div id="ash"></div>
              </div>
              <p>Denny Luan</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ul>
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
    </div>
  );
}

export default App;
