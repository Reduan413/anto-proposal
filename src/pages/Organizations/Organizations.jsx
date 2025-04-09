import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./organizations.css";
import OrganizationsImg from "../../../public/assets/organizations_img.png";

export default function Organizations() {
  return (
    <div className="organizations">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <h3 className="min-title">Here are just some of the organizations</h3>
      <h3 className="sub-title">We Have Helped Empower:</h3>
      <img src={OrganizationsImg} alt="" />
      <PageCounter page="ABOUT US" number="14" />
    </div>
  );
}
