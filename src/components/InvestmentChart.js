import React from 'react';
import { useParams } from 'react-router-dom';
import './InvestmentDetails.css';

const InvestmentDetails = ({ investments }) => {
  const { id } = useParams();
  const investment = investments?.find((inv) => inv.id === parseInt(id));

  if (!investment) {
    return <div className="not-found">Investment details not available</div>;
  }

  return (
    <div className="investment-details-container">
      <div className="investment-details">
        <h2 className="investment-details-heading">{investment.name}</h2>
        <p className="investment-description">{investment.description}</p>
        <div className="investment-info">Amount Invested: ${investment.amount}</div>
      </div>
    </div>
  );
};

export default InvestmentDetails;
