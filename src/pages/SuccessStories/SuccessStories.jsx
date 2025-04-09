import PageCounter from "../../components/PageCounter";
import PageTopTitle from "../../components/PageTopTitle";
import "./successStories.css";

export default function SuccessStories() {
  return (
    <div className=" success_stories">
      <PageTopTitle title={"PROJECT  PROPOSAL"} />
      <div>
        <div className="experiences">
          <div className="experience_detail">
            <h2 className="counter">15+</h2>
            <h5 className="counter_title">Years of Experience</h5>
          </div>
          <div className="experiences_flex">
            <div className="experience_detail">
              <h2 className="counter">150+</h2>
              <h5 className="counter_title">Clients</h5>
            </div>
            <div className="experience_detail">
              <h2 className="counter">700+</h2>
              <h5 className="counter_title">Projects</h5>
            </div>
          </div>
        </div>
        <p className="detail">
          Take a look at examples of how Antopolis has been Empowering
          Changemakers Towards Success across a diverse range of industries and
          markets at
        </p>
        <a href="https://www.google.com/">View Success Stories</a>
      </div>
      <PageCounter page="ABOUT US" number="15" />
    </div>
  );
}
