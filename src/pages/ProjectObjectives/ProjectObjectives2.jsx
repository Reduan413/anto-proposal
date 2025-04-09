import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./projectObjectives.css";

export default function ProjectObjectives2() {
  return (
    <div className="project_objectives">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <div className="contents">
        <h2 className="min_title">Proposal for</h2>
        <h2 className="min_title">Uttara Sector 7 Welfare Society</h2>

        <div className="objective_details">
          <h5 className="detail_title">
            <span>3</span> System Structure
          </h5>
          <ul>
            <li>
              <span>Data Hierarchy:</span> Roads → Plots → Buildings/Flats →
              Owners/Tenants → Transaction History.
            </li>
            <li>
              <span>User Types:</span> Flat/Plot Owners, Tenants, Welfare
              Society Administrators.
            </li>
          </ul>
        </div>
        <div className="objective_details">
          <h5 className="detail_title">
            <span>4</span> Deliverables
          </h5>
          <ul>
            <li>A fully functional web-based record-keeping system.</li>
            <li>Comprehensive user manual and documentation.</li>
            <li>Training session for administrators.</li>
            <li>Ongoing maintenance and support for a defined period.</li>
          </ul>
        </div>
        <p className="description">
          We look forward to working with the Uttara Sector 7 Welfare Society to
          deliver a robust and user-friendly record-keeping system.
        </p>
      </div>

      <PageCounter page="PROPOSAL" number="5" />
    </div>
  );
}
