import React from "react";
import "./timeline.css";
import PageCounter from "../../components/PageCounter";

const technologyStack = [
  {
    title: "React",
    logo: [
      {
        _id: "sdsdsdsds",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
    description: "A JavaScript library for building user interfaces.",
    precedence: 1,
  },
  {
    title: "Backend",
    logo: [
      {
        _id: "sdsdsdsds",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        _id: "sdsdsdsdsdee",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],

    description: "Server-side logic and database management.",
    precedence: 3,
  },
  {
    title: "Frontend",
    logo: [
      {
        _id: "wewewdsx",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        _id: "wewewdsxds",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
    description: "Client-side rendering and user interaction.",
    precedence: 2,
  },
  {
    title: "Deployment",
    logo: [
      {
        _id: "wewewdsxds",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
      {
        _id: "wewewdsxds",
        src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      },
    ],
    description: "Hosting the application on a server.",
    precedence: 4,
  },
];

export default function Timeline() {
  return (
    <div className="page">
      <section className="technology-section">
        <h2 className="section-title">TECHNOLOGIES</h2>
        <div className="tech-stack">
          {technologyStack
            ?.sort((a, b) => a.precedence - b.precedence)
            ?.map((tech) => (
              <div className="tech-item" key={tech.title}>
                <h3 className="tech-title">{tech.title}</h3>
                <div className="tech-logos">
                  {tech.logo.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.src}
                      alt={`${tech.title} logo`}
                      className="tech-logo"
                    />
                  ))}
                </div>
                <p className="description">{tech.description}</p>
              </div>
            ))}
        </div>
      </section>

      <section className="timeline-section">
        <h2 className="section-title">Timeline</h2>

        <p className="timeline-description">
          Assuming prompt collaboration from your end at each phase of feedback,
          developing the platform will take as little as: 30 working days total
        </p>

        <div className="timeline-grid">
          <div className="timeline-phase">Exploration</div>
          <div className="timeline-days">1 Working Days</div>

          <div className="timeline-phase">Analysis</div>
          <div className="timeline-days">3 Working Days</div>

          <div className="timeline-phase">UI/UX Design</div>
          <div className="timeline-days">4 Working Days</div>

          <div className="timeline-phase">Programming</div>
          <div className="timeline-days">16 Working Days</div>

          <div className="timeline-phase">Testing and Bug-fixing</div>
          <div className="timeline-days">5 Working Days</div>

          <div className="timeline-phase">Deployment</div>
          <div className="timeline-days">1 Working Days</div>

          <div className="timeline-phase total">Total</div>
          <div className="timeline-days total">30 Working Days</div>
        </div>
      </section>
      <PageCounter page={"Proposal"} number={5} />
    </div>
  );
}
