import React from "react";
import "./investment.css";
import PageCounter from "../../components/PageCounter";

const data = [
  {
    Item: "domain",
    Purpose:
      "The domain will be purchased by its users through which the platform will be accessed.",
    Specification:
      "We recommend a domain from Godaddy or Namecheap to keep project costs low.",
  },
  {
    Item: "Database",
    Purpose:
      "The database for the platform will be created with MongoDB installed with reliability, and access point price.",
    Specification:
      "We recommend MongoDB NoSQL database for its scalability, reliability, and access point price.",
  },
  {
    Item: "Virtual Machines (VMs)",
    Purpose:
      "Droplet VMs will be used to run code for the platform in the cloud",
    Specification:
      "Droplet VMs over AWS for their excellent reliability, given the size of the project.",
  },
  {
    Item: "S3 Bucket",
    Purpose:
      "AWS S3 technology will be used for file storage and the CDN, ensuring smooth user experience and maintaining high-cost-efficiency while maintaining quality.",
    Specification:
      "Spaces for the S3 bucket due to its high cost-efficiency while maintaining quality.",
  },
  {
    Item: "Email Service",
    Purpose:
      "An automated email service will be used for sending notifications, & will be used for platform access and platform access.",
    Specification:
      "We recommend Sendgrid due to its reliability and value-for-cost.",
  },
];

export default function Investment() {
  return (
    <div className="page">
      <div className="investment-page">
        <div className="investment-page-header">
          <h2>CLIENT-SIDE REQUIREMENTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            deleniti vel mollitia. Tempora veniam minima excepturi magni ducimus
            corporis illum vel sunt.
          </p>
        </div>
      </div>

      <table className="investment-table">
        <thead className="investment-table-header">
          <tr>
            <th
              style={{
                width: "20%",
              }}
            >
              Item
            </th>
            <th>Purpose</th>
            <th>Specification</th>
          </tr>
        </thead>
        <tbody className="investment-table-body">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="item">{item.Item}</td>
              <td>{item.Purpose}</td>
              <td>{item.Specification}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="investment-page-footer">
        <h2>Cloud Infrastructure from Antopolis (Optional)</h2>

        <div className="package-grid">
          <div className="package-details">
            <div>
              <h2 className="pa">Package Details</h2>
              <hr
                style={{
                  borderTop: "none",
                  borderRight: "none",
                  borderBottom: "1px solid #1F497D",
                }}
              />
              <ul>
                <li>Virtual Machine with weekly backups.</li>
                <li>Database with weekly backups.</li>
                <li>S3 Bucket for storage and content delivery.</li>
                <li>Automated email service.</li>
              </ul>
            </div>
          </div>
          <div className="package-amount">
            <h2>Amount</h2>
            <hr
              style={{
                borderTop: "none",
                borderRight: "none",
                borderBottom: "1px solid #1F497D",
              }}
            />
            <div className="amount-content">
              <div>
                <span className="currency">৳</span>
                <span className="price">4,000/Month*</span>
              </div>
              <p className="note">*Monthly Prepaid</p>
            </div>
          </div>
        </div>
      </div>
      <PageCounter page={"Project Investment"} number={11} />
    </div>
  );
}
