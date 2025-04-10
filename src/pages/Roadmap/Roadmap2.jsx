import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./roadmap.css";
import TestingImg from "../../../public/assets/roadmap/testing.png";
import DeploymentImg from "../../../public/assets/roadmap/deployment.png";
import MaintenanceImg from "../../../public/assets/roadmap/maintenance.png";
export default function Roadmap2() {
  return (
    <div className="page roadmap">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <div className="roadmap_cards roadmap2">
        <div className="card1 roadmap_card">
          <div className="roadmap_card_img">
            <img src={TestingImg} alt="" className="testing_img" />
          </div>
          <div className="roadmap_card_details">
            <h3>Testing</h3>
            <p>
              Our team of software testers will perform through end- testing on
              the app, and our programmers will resolve any issues that are
              identified to ensure a high quality, reliable application to
              ensure a smooth experience for you and your users. You and your
              team will also be granted access to the application deployed to a
              testing machine, and will be welcome to collaborate with us in
              identifying any issues which may come up.
            </p>
          </div>
        </div>
        <div className="card2 roadmap_card">
          <div className="roadmap_card_details">
            <h3>Deployment</h3>
            <p>
              Once the app is ready for launch, our DevOps engineers will deploy
              the final product to Digital Ocean Droplet VMs and file hosting
              will be accomplished on Digital Ocean Spaces utilizing AWS S3
              technology.
            </p>
          </div>
          <div className="roadmap_card_img">
            <img src={DeploymentImg} alt="" className="testing_img" />
          </div>
        </div>
        <div className="card1 roadmap_card">
          <div className="roadmap_card_img">
            <img src={MaintenanceImg} alt="" className="testing_img" />
          </div>
          <div className="roadmap_card_details">
            <h3>Maintenance</h3>
            <p>
              We offer maintenance services which ensure the continuous,
              reliable upkeep of the app which includes resolving any unforeseen
              issues which may pop up, in order to safeguard a smooth and
              seamless user experience. Maintenance ensures that the app will
              continue to function with the feature- set as present during
              handover, and that any unresolved bugs which may pop up after
              handover are resolved expeditiously.
            </p>
          </div>
        </div>
      </div>
      <PageCounter page="PROPOSAL" number="7" />
    </div>
  );
}
