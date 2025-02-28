import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/InvestmentDetails.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const investmentsData = [
  { id: 1, name: "Real Estate Fund", description: "Invest in properties worldwide.", amount: 5000 },
  { id: 2, name: "Tech Startup Equity", description: "Own shares in the next big startup.", amount: 1000 },
  { id: 3, name: "Government Bonds", description: "Low-risk fixed income investment.", amount: 500 },
  { id: 4, name: "Crypto Portfolio", description: "Invest in cryptocurrencies.", amount: 2000 },
];

const InvestmentDetails = () => {
  const { id } = useParams();
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    const foundInvestment = investmentsData.find((inv) => inv.id === parseInt(id));
    setInvestment(foundInvestment);
  }, [id]);

  if (!investment) {
    return <div className="not-found">⚠ Investment details not found. Please check your selection.</div>;
  }

  const chartData = {
    labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
    datasets: [
      {
        label: 'Investment Growth',
        data: [investment.amount, investment.amount * 1.1, investment.amount * 1.25, investment.amount * 1.4, investment.amount * 1.6],
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
    ],
  };

  return (
    <div className="investment-details-container">
      <div className="investment-details">
        <h2 className="investment-details-heading">{investment.name}</h2>
        <p className="investment-description">{investment.description}</p>
        <div className="investment-info">Amount Invested: ${investment.amount}</div>
        <div className="investment-growth-chart">
          <h3>Projected Growth</h3>
          <Bar data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
