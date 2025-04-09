import React from "react";
import "./timeline.css";

export default function Timeline() {
  return (
    <div className="page">
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
    </div>
  );
}
