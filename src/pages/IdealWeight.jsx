import { useState } from "react";

export const IdealWeight = () => {
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("male");
  const [frameSize, setFrameSize] = useState("medium");
  const [result, setResult] = useState(null);

  const calculateIdealWeight = (height, gender, frameSize) => {
    // Height in inches, starting at 5 feet (60 inches)
    const baseHeight = 60;
    const heightInInches = height / 2.54; // Convert cm to inches
    const extraInches = heightInInches - baseHeight;

    // Base weights for 5 feet
    const baseWeight = gender === "male" ? 48 : 45.5; // in kg

    // Weight adjustment per inch over 5 feet
    const weightPerInch = gender === "male" ? 2.7 : 2.2; // in kg

    // Calculate ideal weight
    let idealWeight = baseWeight + extraInches * weightPerInch;

    // Frame size adjustments
    const frameAdjustment = {
      small: 0.9,
      medium: 1,
      large: 1.1,
    };

    idealWeight *= frameAdjustment[frameSize];

    return {
      minimum: Math.round(idealWeight * 0.9),
      ideal: Math.round(idealWeight),
      maximum: Math.round(idealWeight * 1.1),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height) {
      const weightRange = calculateIdealWeight(
        parseFloat(height),
        gender,
        frameSize
      );
      setResult(weightRange);
      document.getElementById("weight_modal_1").showModal();
    } else {
      document.getElementById("weight_modal_2").showModal();
    }
  };

  return (
    <div className="flex justify-center mt-40 w-screen">
      <div className="card card-compact bg-base-300 w-96 shadow-[0_0_50px_-15px] shadow-primary">
        <div className="card-body">
          <h2 className="card-title mt-2">Ideal Weight Calculator</h2>

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
              <span className="label-text">Gender</span>
            </div>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Frame Size</span>
            </div>
            <select
              value={frameSize}
              onChange={(e) => setFrameSize(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="small">Small Frame</option>
              <option value="medium">Medium Frame</option>
              <option value="large">Large Frame</option>
            </select>
          </label>

          <button className="btn btn-primary mt-8" onClick={handleSubmit}>
            Calculate Ideal Weight
          </button>

          {/* Success Modal */}
          <dialog id="weight_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl">Ideal Weight Range</h3>
              {result && (
                <div className="py-4 text-lg">
                  <div className="divider">Weight Range</div>
                  <p>Minimum: {result.minimum} kg</p>
                  <p>Ideal: {result.ideal} kg</p>
                  <p>Maximum: {result.maximum} kg</p>
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
          <dialog id="weight_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Error</h3>
              <p className="py-4">
                Please enter your height to calculate ideal weight
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
