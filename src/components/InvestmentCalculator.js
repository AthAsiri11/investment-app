import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import "../styles/Calculator.css";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const InvestmentCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(8);

  const calculateGrowth = () => {
    let data = [];
    let value = amount;
    for (let i = 1; i <= years; i++) {
      value += value * (rate / 100);
      data.push(value.toFixed(2));
    }
    return data;
  };

  return (
    <div className="calculator-container">
      <h2>Investment Calculator</h2>
      <div className="inputs">
        <div className="input-group">
          <label htmlFor="amount">Investment Amount:</label>
          <input id="amount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} placeholder="Enter amount" />
        </div>

        <div className="input-group">
          <label htmlFor="years">Number of Years:</label>
          <input id="years" type="number" value={years} onChange={(e) => setYears(Number(e.target.value))} placeholder="Enter years" />
        </div>

        <div className="input-group">
          <label htmlFor="rate">Expected Return (%):</label>
          <input id="rate" type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} placeholder="Enter return %" />
        </div>
      </div>

      <div className="chart-container">
        <Bar
          data={{
            labels: Array.from({ length: years }, (_, i) => `Year ${i + 1}`),
            datasets: [{ label: "Projected Growth", data: calculateGrowth(), backgroundColor: "rgba(75,192,192,0.6)" }],
          }}
        />
      </div>
    </div>
  );
};

export default InvestmentCalculator;
