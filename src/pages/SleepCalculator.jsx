import { useState } from "react";

export const SleepCalculator = () => {
  const [wakeTime, setWakeTime] = useState("");
  const [result, setResult] = useState(null);

  const calculateSleepTime = (wakeupTime) => {
    const SLEEP_CYCLE = 90; // 90 minutes per cycle
    const FALL_ASLEEP_TIME = 15; // 15 minutes to fall asleep
    const cycles = [5, 6]; // Recommended sleep cycles

    const wakeTimeDate = new Date(`2000/01/01 ${wakeupTime}`);
    let bedTimes = [];

    cycles.forEach((cycle) => {
      const sleepDuration = cycle * SLEEP_CYCLE + FALL_ASLEEP_TIME;
      const bedTime = new Date(wakeTimeDate);
      bedTime.setMinutes(bedTime.getMinutes() - sleepDuration);
      bedTimes.push({
        cycles: cycle,
        time: bedTime.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      });
    });

    return bedTimes;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (wakeTime) {
      const sleepTimes = calculateSleepTime(wakeTime);
      setResult(sleepTimes);
      document.getElementById("sleep_modal_1").showModal();
    } else {
      document.getElementById("sleep_modal_2").showModal();
    }
  };

  return (
    <div className="flex justify-center mt-40 w-screen">
      <div className="card card-compact bg-base-300 w-96 shadow-[0_0_50px_-15px] shadow-primary">
        <div className="card-body">
          <h2 className="card-title mt-2">Sleep Calculator</h2>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Desired Wake Time</span>
            </div>
            <input
              type="time"
              value={wakeTime}
              onChange={(e) => setWakeTime(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <button className="btn btn-primary mt-8" onClick={handleSubmit}>
            Calculate Bedtime
          </button>

          {/* Success Modal */}
          <dialog id="sleep_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl">Recommended Bedtimes</h3>
              {result && (
                <div className="py-4 text-lg">
                  <div className="divider">For Best Sleep Quality</div>
                  {result.map((time, index) => (
                    <p key={index}>
                      {time.cycles} cycles ({time.cycles * 1.5} hours):{" "}
                      {time.time}
                    </p>
                  ))}
                  <div className="divider"></div>
                  <p className="text-sm opacity-75">
                    *Includes 15 minutes to fall asleep
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
          <dialog id="sleep_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Error</h3>
              <p className="py-4">Please select your desired wake up time</p>
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
