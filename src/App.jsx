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
      <Routes >
        
        <Route path="/" element={<Homepage />} />
        <Route path="/bmi" element={<BmiCalculator />} />
        <Route path="/age" element={<AgeCalculator />} />
        <Route
          path="/water"
          element={<WaterIntakeCalculator />}
        />
        <Route path="/sleep" element={<SleepCalculator />} />
        <Route
          path="/ideal-weight"
          element={<IdealWeight />}
        />
      </Routes>
    </>
  );
}

export default App;
