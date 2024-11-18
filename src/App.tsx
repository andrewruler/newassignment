import React from 'react';
import AmbiguousCase from './components/AmbiguousCase';
import NewtonsMethod from './components/NewtonsMethod';
import HeronsFormula from './components/HeronsFormula';
import PolynomialFunction from './components/PolynomialFunction';
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="component">
        <AmbiguousCase />
      </div>
      <div className="component">
        <NewtonsMethod />
      </div>
      <div className="component">
        <HeronsFormula />
      </div>
      <div className="component">
        <PolynomialFunction />
      </div>
    </div>
  );
}

export default App;
