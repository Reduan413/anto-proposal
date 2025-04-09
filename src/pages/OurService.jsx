import React from "react";

const serviceData = [
  {
    id: 1,
    title: `Custom Web & Mobile
Application Development`,
    img: "http://unsplash.it/300/300",
    description: `We specialize in creating bespoke web and mobile applications designed to meet your unique needs and objectives. Our team
combines deep technical expertise with a commitment to user
experience, ensuring that each app is not only tailored to your
brand and goals but is also intuitive, beautiful, and built to
perform. Whether you’re launching a new platform or enhancing
an existing one, we’ll bring your vision to life with an app that
captivates and engages.`,
  },
  {
    id: 2,
    title: "Strategic Tech Consulting for Startups",
    img: "http://unsplash.it/300/300",
    description: `Navigating the tech landscape can be challenging, especially for
startups aiming to make smart, impactful decisions from the
start. We offer expert consulting services that guide you through
essential tech choices, from foundational decisions to future-
proofing strategies. Our insights help you prioritize resources,
maximize growth potential, and create a technology roadmap
that aligns with your short-`,
  },
  {
    id: 3,
    title: "Tech Talent Offshoring",
    img: "http://unsplash.it/300/300",
    description: `Access top-tier software development resources without the
overhead of full-time hires. With our flexible offshoring model,
you get access to skilled developers and tech talent on an hourly
basis, ideal for organizations looking to optimize budgets, reduce
HR demands, or meet the demands of project-`,
  },
];

export default function OurService() {
  return (
    <div className="page service-page">
      <h1>Our Service</h1>

      <div className="service-list">
        {serviceData.map((service) => (
          <div key={service.id} className="service-item">
            <figure>
              <img src={service.img} alt={service.title} />
            </figure>
            <div className="service-content">
              <h2>{service.title}</h2>
              <p>
                {service.description.length > 300
                  ? service.description.slice(0, 300)
                  : service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
