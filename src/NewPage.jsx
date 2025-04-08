import jsPDF from "jspdf";

export const generateProposalPage4 = () => {
  const doc = new jsPDF({
    unit: "pt",
    format: "a4",
  });

  // Page Setup
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 40;
  let y = margin;

  // Set dark background
  doc.setFillColor(10, 15, 44); // #0A0F2C
  doc.rect(0, 0, pageWidth, pageHeight, "F");

  doc.setTextColor(255, 255, 255); // white text
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  doc.text("PROJECT PROPOSAL", pageWidth / 2, y, { align: "center" });

  y += 20;
  doc.setFontSize(20);
  doc.text("Proposal for", pageWidth / 2, y, { align: "center" });

  y += 20;
  doc.setFontSize(14);
  doc.text("Uttara Sector 7 Welfare Society", pageWidth / 2, y, {
    align: "center",
  });

  y += 40;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  const introText =
    "Antopolis shall develop a custom web application for the Uttara Sector 7 Welfare Society to enable maintaining records of plot and flat owners, tenants, and financial transactions. This system will improve efficiency in managing ownership details, tracking financial dues, and generating reports for timely collections.";

  const splitText = doc.splitTextToSize(introText, pageWidth - 2 * margin);
  doc.text(splitText, margin, y);
  y += splitText.length * 14 + 10;

  // Section Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);
  doc.text("1. Project Objectives", margin, y);
  y += 18;

  // Bullet Points
  doc.setFont("helvetica", "normal");
  const objectives = [
    "Develop a structured database for managing property and ownership details.",
    "Implement a financial tracking module for monthly and yearly fees.",
    "Enable report generation for payment statuses and ownership records.",
    "Provide a user-friendly interface for effective record management.",
  ];

  objectives.forEach((obj) => {
    const lines = doc.splitTextToSize(`• ${obj}`, pageWidth - 2 * margin);
    doc.text(lines, margin, y);
    y += lines.length * 14;
  });

  y += 10;
  doc.setFont("helvetica", "bold");
  doc.text("2. Key Features", margin, y);
  y += 18;

  const features = [
    {
      title: "Property Record Management:",
      desc: "Database for roads, plots, flats, owners, and tenants with document storage.",
    },
    {
      title: "Financial Management:",
      desc: "Track fees, override default charges, generate invoices, maintain payment history, and produce due payment reports.",
    },
    {
      title: "User Management:",
      desc: "Assign unique identifiers, update property details, and manage ownership records.",
    },
    {
      title: "Reporting & Notifications:",
      desc: "Generate reports on ownership, tenancy, and financial dues; notify administrators about unpaid dues.",
    },
  ];

  doc.setFont("helvetica", "normal");
  features.forEach((feature) => {
    const lines = doc.splitTextToSize(
      `• ${feature.title} ${feature.desc}`,
      pageWidth - 2 * margin
    );
    doc.text(lines, margin, y);
    y += lines.length * 14;
  });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(180);
  doc.text("PROPOSAL · PAGE 4", margin, pageHeight - 30);

  doc.save("proposal_page_4.pdf");
};
