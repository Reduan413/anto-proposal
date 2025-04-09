import React from "react";
import "./payment.css";

const breakdownData = [
  {
    id: 1,
    title: "Payment Breakdown",
    description:
      "We accept various payments in two equal installments. (50% each) under the following scheme",
  },
  {
    id: 2,
    title: "Payment Breakdown",
    description:
      "We accept various payments in two equal installments. (50% each) under the following scheme",
  },
];

function VrLine() {
  return (
    <div className="vr-line">
      <div className="line"></div>
    </div>
  );
}
export default function PaymentBreakdown() {
  return (
    <div className="page">
      <div className="breakdown-container">
        <div className="breakdown-header">
          <h2>Payment Breakdown</h2>
          <p>
            We accept various payments in two equal installments. (50% each)
            under the following scheme
          </p>
        </div>

        <div className="payment-timeline">
          {breakdownData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-number">{index + 1}</div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              {index < breakdownData.length - 1 && (
                <div className="timeline-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
