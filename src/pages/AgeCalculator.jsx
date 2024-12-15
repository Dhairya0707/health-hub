import React, { useState } from "react";
import {
  formatDate,
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

export const AgeCalculator = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState(formatDate(new Date(), "yyyy-MM-dd"));
  const [result, setResult] = useState(null);

  const calculateAge = (from, to) => {
    if (!from || !to) return null;

    const fromDateObj = new Date(from);
    const toDateObj = new Date(to);

    return {
      years: differenceInYears(toDateObj, fromDateObj),
      months: differenceInMonths(toDateObj, fromDateObj) % 12,
      totalMonths: differenceInMonths(toDateObj, fromDateObj),
      weeks: differenceInWeeks(toDateObj, fromDateObj),
      days: differenceInDays(toDateObj, fromDateObj),
      hours: differenceInHours(toDateObj, fromDateObj),
      minutes: differenceInMinutes(toDateObj, fromDateObj),
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fromDate && toDate) {
      const ageResult = calculateAge(fromDate, toDate);
      setResult(ageResult);
      document.getElementById("age_modal_1").showModal();
    } else {
      document.getElementById("age_modal_2").showModal();
    }
  };

  return (
    <div className="flex justify-center mt-40 w-screen">
      <div className="card card-compact bg-base-300 w-96 shadow-[0_0_50px_-15px] shadow-primary">
        <div className="card-body">
          <h2 className="card-title mt-2">Age Calculator</h2>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Date of Birth</span>
            </div>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Calculate To Date</span>
            </div>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="input input-bordered w-full max-w-xs"
            />
          </label>

          <button className="btn btn-primary mt-8" onClick={handleSubmit}>
            Calculate Age
          </button>

          {/* Success Modal */}
          <dialog id="age_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-xl">Age Calculation Result</h3>
              {result && (
                <div className="py-4 text-lg">
                  <div className="divider">Years and Months</div>
                  <p>
                    {result.years} years and {result.months} months
                  </p>
                  <p>Total Months: {result.totalMonths}</p>

                  <div className="divider">Detailed Breakdown</div>
                  <p>Total Weeks: {result.weeks.toLocaleString()}</p>
                  <p>Total Days: {result.days.toLocaleString()}</p>
                  <p>Total Hours: {result.hours.toLocaleString()}</p>
                  <p>Total Minutes: {result.minutes.toLocaleString()}</p>

                  <div className="divider"></div>
                  <p className="text-sm opacity-75">
                    *Calculations are approximate and don't account for leap
                    seconds
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
          <dialog id="age_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Error</h3>
              <p className="py-4">
                Please select both dates to calculate the age difference
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
