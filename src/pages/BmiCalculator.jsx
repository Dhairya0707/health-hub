import React, { useState } from "react";

export const BmiCalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState(null);

  const calculateBMI = (height, weight) => {
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Add BMI category
    let category;
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    return {
      bmi: bmi,
      category: category,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && weight) {
      const bmiResult = calculateBMI(parseFloat(height), parseFloat(weight));
      setResult(bmiResult);
      document.getElementById("bmi_modal_1").showModal();
    } else {
      document.getElementById("bmi_modal_2").showModal();
    }
  };

  return (
    <div className="flex justify-center mt-40 w-screen">
      <div className="card card-compact bg-base-300 w-96 shadow-[0_0_50px_-15px] shadow-primary">
        <div className="card-body">
          <h2 className="card-title mt-2">Body Mass Index Calculator</h2>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Height (cm)</span>
            </div>
            <input
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Weight (kg)</span>
            </div>
            <input
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <button className="btn btn-primary mt-8" onClick={handleSubmit}>
            Calculate BMI
          </button>

          {/* Success Modal */}
          <dialog id="bmi_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl">BMI Result</h3>
              {result && (
                <div className="py-4 text-lg">
                  <div className="divider">Your BMI</div>
                  <p>BMI Value: {result.bmi}</p>
                  <p>Category: {result.category}</p>
                  <div className="divider"></div>
                  <p className="text-sm opacity-75">
                    BMI Categories:
                    <br />
                    Underweight: &lt; 18.5
                    <br />
                    Normal weight: 18.5 - 24.9
                    <br />
                    Overweight: 25 - 29.9
                    <br />
                    Obese: ≥ 30
                  </p>
                </div>
              )}
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>

          {/* Error Modal */}
          <dialog id="bmi_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Error</h3>
              <p className="py-4">
                Please enter both height and weight to calculate BMI
              </p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-error">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};
