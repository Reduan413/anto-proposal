import React from "react";
import "./dedicated.css";
import PageCounter from "../../components/PageCounter";

const data = {
  img: "http://unsplash.it/300/300",
  title:
    "Antopolis is your dedicated tech partner for custom web/app development and strategic guidance – delivering stunning, user-focused platforms that drive business success.",
  description: ` <p>
          Welcome to Antopolis – the ideal tech partner for building custom web and mobile
          applications that drive your organizational goals forward. We love to work with people
          seeking to make a difference in their industries or communities, and not only offer
          them app development services, but also strategic guidance on tech decisions which
          can shape both your immediate and long-term success.
        </p>
        <br />

        <p>
          Antopolis is a strong believer in the ability of user-centric, goal-oriented applications
          to elevate business success. For each app we bring to life, we meticulously map out
          the user experience before design and development to ensure that users have an intuitive
          and engaging experience that simultaneously aligns with your objectives. Afterwards our
          designers and programmers take charge, crafting visually stunning, seamless apps that
          not only look great but also perform flawlessly.
        </p>
        <br />

        <p>
          Alongside our app development services, we also offer strategic tech consulting for
          startups looking to navigate their journeys towards success – and to anyone else looking
          for expert insights. For organizations needing flexibility, we also offer software
          development resources at hourly rates under a dev shop model, perfect for reducing HR
          overhead or fulfilling project-based staffing needs.
        </p>`,
};

export default function DedicatedMessage() {
  return (
    <div className="page dedicated-page">
      <div className="">
        <div className="dedicated-head">
          <p>{data.title}</p>
        </div>
        <div className="dedicated-content">
          <div
            className="dedicated-description"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div className="dedicated-img">
            <img src={data.img} alt={data.title} />
          </div>
        </div>
      </div>
      <PageCounter page="ABOUT US" number="Page 12" />
    </div>
  );
}
