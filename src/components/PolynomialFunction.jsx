import React, { useState } from 'react';

function PolynomialFunction() {
  const [formData, setFormData] = useState({
    coefficients: "",
    exponents: "",
    x: "",
    polyEquation: "",
    polyResult: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateResult = () => {
    let equation = 0;
    const { coefficients, exponents, x } = formData;
    const coeffArr = coefficients.split(' ').map(Number);
    const expArr = exponents.split(' ').map(Number);
    const xVal = parseFloat(x);

    for (let i = 0; i < coeffArr.length; i++) {
      equation += coeffArr[i] * Math.pow(xVal, expArr[i]);
    }
    return equation;
  };

  const calculateEquation = () => {
    let equation = "";
    const { coefficients, exponents } = formData;
    const coeffArr = coefficients.split(' ');
    const expArr = exponents.split(' ');

    for (let i = 0; i < coeffArr.length; i++) {
      equation += coeffArr[i];
      if (i !== coeffArr.length) {
        equation += "x^";
      }
      equation += expArr[i];
      if (i < coeffArr.length - 1) {
        if (parseInt(coeffArr[i + 1]) < 0) {
          equation += " ";
        } else {
          equation += " + ";
        }
      }
    }
    return equation;
  };

  const handleCalculate = () => {
    const polyEquation = calculateEquation();
    const polyResult = calculateResult();
    setFormData({
      ...formData,
      polyEquation,
      polyResult,
    });
  };

  return (
    <div className="polynomial">
      <h1>Polynomial Function</h1>
      <p>Coefficients</p>
      <input
        type="text"
        name="coefficients"
        id="polyCoefficients"
        value={formData.coefficients}
        onChange={handleChange}
      />
      <p>Exponents</p>
      <input
        type="text"
        name="exponents"
        id="polyExponents"
        value={formData.exponents}
        onChange={handleChange}
      />
      <p>x Value</p>
      <input
        type="text"
        name="x"
        id="polyXValue"
        value={formData.x}
        onChange={handleChange}
      />
      <p>Polynomial Function (result)</p>
      <input
        type="text"
        name="polyEquation"
        id="polyFunction"
        value={formData.polyEquation}
        disabled
      />
      <p>Polynomial Evaluation (result)</p>
      <input
        type="text"
        name="polyResult"
        id="polyEvaluation"
        value={formData.polyResult}
        disabled
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default PolynomialFunction;
