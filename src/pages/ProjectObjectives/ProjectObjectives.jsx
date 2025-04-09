import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./projectObjectives.css";
export default function ProjectObjectives() {
  return (
    <div className="project_objectives">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <div className="contents">
        <h2 className="min_title">Proposal for</h2>
        <h2 className="min_title">Uttara Sector 7 Welfare Society</h2>
        <p className="description">
          Antopolis shall develop a custom web application for the Uttara Sector
          7 Welfare Society to enable maintaining records of plot and flat
          owners, tenants, and financial transactions. This system will improve
          efficiency in managing ownership details, tracking financial dues, and
          generating reports for timely collections.
        </p>
        <div className="objective_details">
          <h5 className="detail_title">
            <span>1</span> Project Objectives
          </h5>
          <ul>
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
        </div>
        <div className="objective_details">
          <h5 className="detail_title">
            <span>2</span> Key Features
          </h5>
          <ul>
            <li>
              <span>Property Record Management:</span> Database for roads,
              plots, flats, owners, and tenants with document storage.
            </li>
            <li>
              <span>Financial Management:</span> Track fees, override default
              charges, generate invoices, maintain payment history, and produce
              due payment reports.
            </li>
            <li>
              <span>User Management:</span> Assign unique identifiers, update
              property details, and manage ownership records.
            </li>
            <li>
              <span>Reporting & Notifications:</span> Generate reports on
              ownership, tenancy, and financial dues; notify administrators
              about unpaid dues.
            </li>
          </ul>
        </div>
      </div>

      <PageCounter page="PROPOSAL" number="4" />
    </div>
  );
}
