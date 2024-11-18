import React, { useState } from "react";

function AmbiguousCase() {
  const [formData, setFormData] = useState({
    alpha: "",
    sideA: "",
    sideB: "",
    result: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      const newFormData = { ...prevFormData, [name]: value };
      return {
        ...newFormData,
        result: determineType(newFormData),
      };
    });
  };

  const determineType = (formData) => {
    let { alpha, sideA, sideB } = formData;

    alpha = parseFloat(alpha);
    sideA = parseFloat(sideA);
    sideB = parseFloat(sideB);
    alpha = alpha * (Math.PI / 180); // Convert alpha to radians
    const a = sideA;
    const b = sideB;
    let h = b * Math.sin(alpha);
    let result = "";

    if (a==b){
      result = "one triangle";
    }
    if (alpha < Math.PI / 4) {
        console.log(a, h)
      if (a < h) {
        result = "no triangle";
      } else if (a === h) {
        result = "right triangle";
      } else if (h < a && a < b) {
        result = "two triangles";
      }
    } else if (alpha > Math.PI / 4) {
      if (a < b || a === h) {
        result = "no triangle";
      } else if (a > b) {
        result = "one triangle";
      }
    }
    return result;
  };

  return (
    <div className="ambiguous">
      <h1>Ambiguous Case</h1>

      <p>Angle alpha (degrees)</p>
      <input
        type="text"
        name="alpha"
        id="ambiguousAlpha"
        value={formData.alpha}
        onChange={handleChange}
      />

      <p>Side a</p>
      <input
        type="text"
        name="sideA"
        id="ambiguousA"
        value={formData.sideA}
        onChange={handleChange}
      />

      <p>Side b</p>
      <input
        type="text"
        name="sideB"
        id="ambiguousB"
        value={formData.sideB}
        onChange={handleChange}
      />

      <p>Triangle Type (result)</p>
      <input
        type="text"
        name="ambiguousResult"
        id="ambiguousResult"
        value={formData.result}
        disabled
      />

      <button onClick={() => setFormData({ ...formData, result: determineType(formData)})}>
        Calculate
      </button>
    </div>
  );
}

export default AmbiguousCase;
