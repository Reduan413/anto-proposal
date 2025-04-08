import { useRef } from "react";
import { generateProposalPage4 } from "./NewPage";
import "./proposal.css"; // Import the external CSS

export default function Proposal() {
  const pdfRef = useRef();

  // const generatePDF = async () => {
  //   try {
  //     const canvas = await html2canvas(pdfRef.current, {
  //       scale: 2,
  //       useCORS: true,
  //     });
  //     const imgData = canvas.toDataURL("image/png");
  //     const doc = new jsPDF("p", "pt", "a4");
  //     const imgWidth = 595;
  //     const imgHeight = (canvas.height * imgWidth) / canvas.width;
  //     doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
  //     doc.save("Uttara-Sector-7-Proposal.pdf");
  //   } catch (error) {
  //     console.error("PDF generation failed:", error);
  //   }
  // };

  return (
    <div>
      <button
        onClick={() => generateProposalPage4()}
        style={{
          margin: "20px",
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#ffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>

      <div ref={pdfRef} className="proposal-wrapper">
        {/* Page 1 */}
        <div className="page first-page">
          <div className="proposal_to">
            <h1 className="header">Uttara Sector 7 Welfare Society</h1>
            <h2 className="sub-header">
              Custom Record Keeping System Development
            </h2>
            <h3 className="title">Project Proposal</h3>
          </div>
          <p className="date">25 March 2025</p>
        </div>

        {/* Page 2 */}
        <div className="page">
          <h2 className="section-title">Table of Contents</h2>
          <ul className="list">
            <li>Proposal - 04</li>
            <li>Project Investment - 09</li>
            <li>About Us - 12</li>
          </ul>
        </div>

        {/* Page 4 */}
        <div className="page">
          <h2 className="section-title">
            Proposal for Uttara Sector 7 Welfare Society
          </h2>
          <p className="paragraph">
            Antapolis shall develop a custom web application for the Uttara
            Sector 7 Welfare Society to enable maintaining records of plot and
            flat owners, tenants, and financial transactions...
          </p>
          <h3 className="sub-section">Project Objectives</h3>
          <ul className="list">
            <li>
              Develop a structured database for managing property and ownership
              details.
            </li>
            <li>
              Implement a financial tracking module for monthly and yearly fees.
            </li>
            <li>
              Enable report generation for payment statuses and ownership
              records.
            </li>
            <li>
              Provide a user-friendly interface for effective record management.
            </li>
          </ul>
          <h3 className="sub-section">Key Features</h3>
          <ul className="list">
            <li>
              <strong>Property Record Management:</strong> Database for roads,
              plots, flats, owners, and tenants with document storage.
            </li>
            <li>
              <strong>Financial Management:</strong> Track fees, override
              default charges, generate invoices...
            </li>
            <li>
              <strong>User Management:</strong> Assign unique identifiers,
              update property details...
            </li>
            <li>
              <strong>Reporting & Notifications:</strong> Generate reports on
              ownership, tenancy...
            </li>
          </ul>
        </div>

        {/* Page 9 - Project Investment */}
        <div className="page">
          <h2 className="section-title">Project Investment</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Custom Record-Keeping Application Development</td>
                <td>4,00,000</td>
              </tr>
              <tr>
                <td>80% Referral Discount (Akibur Rahman)</td>
                <td>3,20,000</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>80,000*</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note">
            *includes one month of free maintenance service.
          </p>
        </div>
      </div>
    </div>
  );
}

