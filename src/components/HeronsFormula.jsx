import React, { useState } from "react";

const HeronsFormula = () => {
  const [formData, setFormData] = useState({
    sideA: "",
    sideB: "",
    sideC: "",
    result: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateArea = () => {
    const { sideA, sideB, sideC } = formData;
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return "";
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area || "";
  };

  const handleCalculate = () => {
    const area = calculateArea();
    setFormData({
      ...formData,
      result: area,
    });
  };

  return (
    <div className="heron">
      <h1>Heron's Formula</h1>
      <p>Side a</p>
      <input
        type="text"
        name="sideA"
        id="heronA"
        value={formData.sideA}
        onChange={handleChange}
      />
      <p>Side b</p>
      <input
        type="text"
        name="sideB"
        id="heronB"
        value={formData.sideB}
        onChange={handleChange}
      />
      <p>Side c</p>
      <input
        type="text"
        name="sideC"
        id="heronC"
        value={formData.sideC}
        onChange={handleChange}
      />
      <p>Area (result)</p>
      <input
        type="text"
        name="heronResult"
        id="heronResult"
        value={formData.result}
        disabled
      />
      <button onClick={handleCalculate}>Calculate</button>
    </div>
  );
};

export default HeronsFormula;
