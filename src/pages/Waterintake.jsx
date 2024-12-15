import { useState } from "react";

export const WaterIntakeCalculator = () => {
  const [weight, setWeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("sedentary");
  const [climate, setClimate] = useState("moderate");
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (weight) {
      const waterNeeds = calculateWaterIntake(
        parseFloat(weight),
        activityLevel,
        climate
      );
      setResult(waterNeeds);
      document.getElementById("water_modal_1").showModal();
    } else {
      document.getElementById("water_modal_2").showModal();
    }
  };

  return (
    <div className="flex justify-center mt-40 w-screen">
      <div className="card card-compact bg-base-300 w-96 shadow-[0_0_50px_-15px] shadow-primary">
        <div className="card-body">
          <h2 className="card-title mt-2">Water Intake Calculator</h2>

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

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Activity Level</span>
            </div>
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="sedentary">Sedentary</option>
              <option value="light">Light Activity</option>
              <option value="moderate">Moderate Activity</option>
              <option value="intense">Intense Activity</option>
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Climate</span>
            </div>
            <select
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="veryCold">Very Cold (Below 0°C)</option>
              <option value="cold">Cold (0-10°C)</option>
              <option value="moderate">Moderate (10-25°C)</option>
              <option value="warm">Warm (25-32°C)</option>
              <option value="hot">Hot (32-38°C)</option>
              <option value="veryHot">Very Hot (Above 38°C)</option>
            </select>
          </label>

          <button className="btn btn-primary mt-8" onClick={handleSubmit}>
            Calculate Water Intake
          </button>

          {/* Success Modal */}
          <dialog id="water_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl">Daily Water Needs</h3>
              {result && (
                <div className="py-4 text-lg">
                  <div className="divider">Recommended Intake</div>
                  <p>Liters per day: {result.litersPerDay.toFixed(1)} L</p>
                  <p>Cups per day: {result.cupsPerDay} cups</p>
                  <p>Milliliters per day: {result.mlPerDay.toFixed(0)} ml</p>
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
          <dialog id="water_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Error</h3>
              <p className="py-4">
                Please enter your weight to calculate water intake
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

// Basic formula for daily water intake
const calculateWaterIntake = (weight, activityLevel, climate) => {
  let baseWater = weight * 30;

  const activityMultiplier = {
    sedentary: 1,
    light: 1.2,
    moderate: 1.4,
    intense: 1.6,
  };

  const climateAdjustment = {
    veryCold: -300,
    cold: -150,
    moderate: 0,
    warm: 300,
    hot: 500,
    veryHot: 1000,
  };

  const totalWater =
    baseWater * activityMultiplier[activityLevel] + climateAdjustment[climate];

  const finalWater = Math.max(totalWater, 1500);

  return {
    mlPerDay: finalWater,
    litersPerDay: finalWater / 1000,
    cupsPerDay: Math.round(finalWater / 237),
  };
};
