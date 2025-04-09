import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./proposal.css"; // Import the external CSS
<<<<<<< HEAD

import EndPage from "./pages/EndPage/EndPage";
import FirstPage from "./pages/FirstPage/FirstPage";
import ContentsTable from "./pages/ContentsTable/ContentsTable";
import Extraordinary from "./pages/Extraordinary/Extraordinary";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
=======
import ExtraordinaryImg from "../public/assets/extraordinary_img.png";
import EndPageImg from "../public/assets/end_page_img.png";
import { TbWorld } from "react-icons/tb";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import OurService from "./pages/Service/OurService";
>>>>>>> b7cbee499b362c29ce374db91a740e10b6d588c3

export default function Proposal() {
  const pdfRef = useRef();

  const generatePDF = async () => {
    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "pt", "a4");

      const imgWidth = 595; // A4 width in pt
      const pageHeight = 842; // A4 height in pt
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Adjusted height

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("Uttara-Sector-7-Proposal.pdf");
    } catch (error) {
      console.error("PDF generation failed:", error);
    }
  };

  return (
    <div>
      <button
        onClick={generatePDF}
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
        <FirstPage />
        {/* Page 2 */}
        <ContentsTable />
        {/* Page 3 */}
        <Extraordinary/>

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
          <p className="page-counter">
            Proposal | <strong> Page 1</strong>
          </p>
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
          <p className="page-counter">
            Proposal | <strong> Page 1</strong>
          </p>
        </div>
        {/* Success Stories Page  */}
        <SuccessStories />
        {/* End Page  */}
<<<<<<< HEAD
        <EndPage />
=======
        <div className="page end_page">
          <h3 className="title1">
            Let's get the ball rolling and build something outstanding!
          </h3>
          <p className="title2">
            We look forward to empowering your business goals and becoming a
            partner to your success.
          </p>
          <img src={EndPageImg} alt="" className="end_page_img" />
          <div className="contact_details">
            <h2 className="contact_title">Please reach us at:</h2>
            <div>
              <p className="detail">
                <TbWorld /> theantopolis.com
              </p>
              <p className="detail">
                <MdEmail /> info@theantopolis.com
              </p>
              <p className="detail">
                <MdPhoneInTalk /> +880–1322–447011
              </p>
            </div>
          </div>
        </div>

        <OurService />
>>>>>>> b7cbee499b362c29ce374db91a740e10b6d588c3
      </div>
    </div>
  );
}
