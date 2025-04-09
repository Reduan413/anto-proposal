import { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./proposal.css"; // Import the external CSS
import EndPage from "./pages/EndPage/EndPage";
import FirstPage from "./pages/FirstPage/FirstPage";
import ContentsTable from "./pages/ContentsTable/ContentsTable";
import Extraordinary from "./pages/Extraordinary/Extraordinary";
import SuccessStories from "./pages/SuccessStories/SuccessStories";
import OurService from "./pages/Service/OurService";
import DedicatedMessage from "./pages/DedicatedMessage/DedicatedMessage";
import Organizations from "./pages/Organizations/Organizations";
import Roadmap from "./pages/Roadmap/Roadmap";
import ProjectObjectives from "./pages/ProjectObjectives/ProjectObjectives";
import ProjectObjectives2 from "./pages/ProjectObjectives/ProjectObjectives2";

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
        <FirstPage />
        <ContentsTable />
        <Extraordinary />
        <ProjectObjectives/>
        <ProjectObjectives2/>
        <Roadmap/>
        <DedicatedMessage/>
        <OurService />
        <Organizations />
        <SuccessStories />
        <EndPage />
      </div>
    </div>
  );
}
