import React, { useState } from 'react';

function NewtonsMethod() {
  const [formData, setFormData] = useState({ x0: "", result: "" });
  const [iterations, setIterations] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateResult = () => {
    let { x0 } = formData;
    x0 = parseFloat(x0);
    let result = 0;
    let iterationCount = 0;

    while (iterationCount < 10) {
      let fx = 6 * x0 ** 4 - 13 * x0 ** 3 - 18 * x0 ** 2 + 7 * x0 + 6;
      let fx_derivative = 24 * x0 ** 3 - 39 * x0 ** 2 - 36 * x0 + 7;
      result = x0 - fx / fx_derivative;
      x0 = result; // Update x0 with the new result
      iterationCount++;
    }

    return result;
  };

  const handleCalculate = () => {
    const result = calculateResult();
    setFormData({
      ...formData,
      result: result,
    });
  };

  return (
    <div className="newton">
      <h1>Newton's Formula</h1>
      <p>Root Guess</p>
      <input
        type="text"
        name="x0"
        id="newtonGuess"
        value={formData.x0}
        onChange={handleChange}
      />
      <p>Root Approximation (result)</p>
      <input
        type="text"
        name="newtonResult"
        id="newtonResult"
        value={formData.result}
        disabled
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
}

export default NewtonsMethod;
