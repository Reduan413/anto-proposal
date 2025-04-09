import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./roadmap.css";
export default function Roadmap() {
  return (
    <div className="page roadmap">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <h2 className="title">EXECUTION ROADMAP</h2>
      <PageCounter page="PROPOSAL" number="6" />
    </div>
  );
}
