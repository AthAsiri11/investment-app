import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState"; 
import "../styles/Dashboard.css";

const Dashboard = () => {
  const { investments } = useGlobalState(); 
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <section className="investment-section">
        <h2 className="dashboard-heading">Investment Opportunities</h2>
        <div className="investment-list">
          {investments.map((inv) => (
            <div key={inv.id} className="investment-card">
              <h3>{inv.name}</h3>
              <p><strong>Risk Level:</strong> {inv.risk}</p>
              <p><strong>Expected Returns:</strong> {inv.returns}% annually</p>
              <button className="view-details-btn" onClick={() => navigate(`/investment/${inv.id}`)}>View Details</button>
            </div>
          ))}
        </div>
        <button className="calculator-btn" onClick={() => navigate("/calculator")}>Open Investment Calculator</button>
      </section>
    </div>
  );
};

export default Dashboard;
