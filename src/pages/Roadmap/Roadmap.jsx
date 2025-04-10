import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./roadmap.css";
import ExplorationImg from "../../../public/assets/roadmap/exploration.png";
import AnalysisImg from "../../../public/assets/roadmap/analysis.png";
import UiUxDesignImg from "../../../public/assets/roadmap/ui_ux_design.png";
import ProgrammingImg from "../../../public/assets/roadmap/programming.png";
export default function Roadmap() {
  return (
    <div className="page roadmap">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <h2 className="title">EXECUTION ROADMAP</h2>
      <div className="roadmap_cards">
        <div className="card1 roadmap_card">
          <div className="roadmap_card_img">
            <img src={ExplorationImg} alt="" className="exploration_img" />
          </div>
          <div className="roadmap_card_details">
            <h3>Exploration</h3>
            <p>
              Our software analysts will conduct initial meetings to better
              understand your goals, identify precise needs, and formulate a
              plan of action that will result in the perfect app for driving
              your success.
            </p>
          </div>
        </div>
        <div className="card2 roadmap_card">
          <div className="roadmap_card_details">
            <h3>Analysis</h3>
            <p>
              Our analysts explore and define how exactly you and your users
              will interact with the app end-to- end, and identify which
              features need to be prioritized and implemented by creating user
              journeys and user stories, mapping out end-to- end interactions
              via flowcharts, and designing low fidelity wireframes to depict
              the visual layout of the final app.
            </p>
          </div>
          <div className="roadmap_card_img">
            <img src={AnalysisImg} alt="" className="analysis_img" />
          </div>
        </div>
        <div className="card1 roadmap_card">
          <div className="roadmap_card_img">
            <img src={UiUxDesignImg} alt="" className="design_img" />
          </div>
          <div className="roadmap_card_details">
            <h3>UI/UX Design</h3>
            <p>
              We first create a mood board to serve as the visual foundation for
              the project, and then design a high- fidelity visually appealing
              user interface for the application based on the features and
              layout decided in the analysis phase. This is then turned into an
              interactive Figma prototype which showcases the actual
              interactions users will experience with the app.
            </p>
          </div>
        </div>
        <div className="card2 roadmap_card">
          <div className="roadmap_card_details">
            <h3>Programming</h3>
            <p>
              At this stage, our team of expert programmers will work to bring
              the app to life as a functional tech product. The high- fidelity
              UI will be turned into a fully functional front- and React for the
              applications. The database for the product will be created using
              MongoDB, and then APIs will be created using NodeJS to integrate
              the backend database to the front end, enabling the transfer of
              data as required for functionality of the product. We will also
              integrate a separate “Admin Portal ” web application for dynamic
              control of the platform, uploading and management of content, and
              access to user insights.
            </p>
          </div>
          <div className="roadmap_card_img">
            <img src={ProgrammingImg} alt="" className="programming_img" />
          </div>
        </div>
      </div>
      <PageCounter page="PROPOSAL" number="6" />
    </div>
  );
}
