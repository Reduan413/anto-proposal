import React from "react";

import "./pi.css";
import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
export default function ProjectInvestment() {
  return (
    <div className="page project_investment">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <div className="project-container">
        <h1 className="main-title">PROJECT INVESTMENT</h1>

        <table className="table">
          <thead>
            <tr className="table-header">
              <th
                className="table-cell"
                style={{
                  textAlign: "left",
                  width: "70%",
                  borderRight: "1px solid #1F497D",
                }}
              >
                Item
              </th>
              <th
                className="table-cell"
                style={{ textAlign: "right", width: "30%" }}
              >
                Cost
              </th>
            </tr>
          </thead>
          <tbody className="invest-table">
            <tr className="table-row ">
              <td className="table-cell">
                Custom Record-Keeping Application Development
              </td>
              <td className="table-cell" style={{ textAlign: "right" }}>
                ৳ 4,00,000
              </td>
            </tr>
            <tr className="table-row discount-row">
              <td className="table-cell referral-discount">
                80% Referral Discount (Akibur Rahman)
              </td>
              <td className="table-cell" style={{ textAlign: "right" }}>
                - ৳ 3,20,000
              </td>
            </tr>
            <tr className="table-row total-row">
              <td className="table-cell">Total</td>
              <td className="table-cell" style={{ textAlign: "right" }}>
                ৳ 80,000*
              </td>
            </tr>
          </tbody>
        </table>

        <div className="footnote">
          *Includes one month of free maintenance service.
        </div>

        <h2 className="main-title">MAINTENANCE PACKAGES</h2>

        <table className="table">
          <thead className="maintenance-table-head">
            <tr className="table-header">
              <th
                className="table-cell"
                style={{
                  textAlign: "left",
                  width: "33%",
                }}
              >
                Package
              </th>
              <th
                className="table-cell"
                style={{
                  textAlign: "center",
                  width: "33%",
                }}
              >
                Amount
              </th>
              <th
                className="table-cell"
                style={{ textAlign: "center", width: "33%" }}
              >
                Breakdown
              </th>
            </tr>
          </thead>
          <tbody className="maintenance-table">
            <tr className="table-row">
              <td className="table-cell">Monthly</td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 6,000
              </td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                -
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Quarterly</td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 17,250
              </td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 5,750/Month
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Half-Yearly</td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 32,400
              </td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 5,400/Month
              </td>
            </tr>
            <tr className="table-row">
              <td className="table-cell">Yearly</td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 60,000
              </td>
              <td className="table-cell" style={{ textAlign: "center" }}>
                ৳ 5,000/Month
              </td>
            </tr>
          </tbody>
        </table>

        <div className="benefits">
          <h3 className="benefits-title">Benefits:</h3>
          <ul className="benefits-list">
            <li>Any unresolved bugs after handover are resolved.</li>
            <li>
              We will respond back with time needed to resolve a reported issue
              within one working day.
            </li>
            <li>
              Under a maintenance package, bug fixes will not be treated as new
              projects.
            </li>
          </ul>
          <h3 className="benefits-title">NB:</h3>
          <ul className="benefits-list">
            <li>All packages are pre-paid.</li>
            <li>
              Maintenance DOES NOT include or imply the addition of new features
              or major changes.
            </li>
          </ul>
          <div className="validity">
            N.B: This Proposal is valid for 7 business days from date of
            transmission.
          </div>
        </div>
      </div>
      <PageCounter page={"project investment"} number={8} />
    </div>
  );
}
