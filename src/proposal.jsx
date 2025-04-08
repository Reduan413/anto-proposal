import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Proposal() {
  const pdfRef = useRef();

  const generatePDF = async () => {
    try {
      const canvas = await html2canvas(pdfRef.current, {
        scale: 2, // Increase resolution
        useCORS: true, // Handle cross-origin images if any
      });
      const imgData = canvas.toDataURL("image/png");
      const doc = new jsPDF("p", "pt", "a4");
      const imgWidth = 595; // A4 width in points
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      doc.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      doc.save("Uttara-Sector-7-Proposal.pdf");
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
          backgroundColor: "#0070f3", // Hex color, supported
          color: "#ffffff", // Hex color, supported
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Download PDF
      </button>
      <div ref={pdfRef} style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <div style={pageStyle}>
          <h1 style={headerStyle}>Uttara Sector 7 Welfare Society</h1>
          <h2 style={subHeaderStyle}>Custom Record Keeping System Development</h2>
          <h3 style={titleStyle}>Project Proposal</h3>
        </div>
        {/* Add other pages as needed */}
      </div>
    </div>
  );
}

const pageStyle = {
  marginBottom: "40px",
  padding: "20px",
  border: "1px solid #dddddd", // Hex color
  minHeight: "800px",
  width: "595px",
  boxSizing: "border-box",
  backgroundColor: "#ffffff", // Explicitly set to avoid defaults
};

const headerStyle = {
  fontSize: "24px",
  textAlign: "center",
  marginBottom: "10px",
  color: "#000000", // Hex color
};

const subHeaderStyle = {
  fontSize: "18px",
  textAlign: "center",
  marginBottom: "20px",
  color: "#000000",
};

const titleStyle = {
  fontSize: "16px",
  textAlign: "center",
  color: "#000000",
};