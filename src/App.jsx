import "./App.css";

import { BmiCalculator } from "./pages/BmiCalculator";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./pages/Nav";
import { AgeCalculator } from "./pages/AgeCalculator";
import { WaterIntakeCalculator } from "./pages/Waterintake";
import { SleepCalculator } from "./pages/SleepCalculator";
import { IdealWeight } from "./pages/IdealWeight";

function App() {
  return (
    <>
      <Nav />
      <Routes basename="/Health-Metrics-Hub/">
        <Route path="/Health-Metrics-Hub/" element={<Homepage />} />
        <Route path="/Health-Metrics-Hub/bmi" element={<BmiCalculator />} />
        <Route path="/Health-Metrics-Hub/age" element={<AgeCalculator />} />
        <Route
          path="/Health-Metrics-Hub/water"
          element={<WaterIntakeCalculator />}
        />
        <Route path="/Health-Metrics-Hub/sleep" element={<SleepCalculator />} />
        <Route
          path="/Health-Metrics-Hub/ideal-weight"
          element={<IdealWeight />}
        />
      </Routes>
    </>
  );
}

export default App;
