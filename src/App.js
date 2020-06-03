import React from "react";

import "./App.css";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DoughnutChart from "./components/DoughnutChart";

function App() {
  return (
    <div className="App">
      <div className="chart">
        <div>
          <LineChart />
        </div>
        <div>
          <BarChart />
        </div>
        <div>
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}

export default App;
