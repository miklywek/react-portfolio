import React from "react";
import Github from "../../assets/iconComponents/Github";
function Project() {
  const projects = [
    {
      name: "Weather Dashboard",
      stack: "HTML, CSS, Javascript",
      link: "https://miklywek.github.io/weather-dashboard/",
    },
    {
      name: "Work Day Scheduler",
      stack: "jQuery Bootstrap",
      link: " https://miklywek.github.io/work-day-scheduler/",
    },
    {
      name: "Just Tech News",
      stack: "Node",
      link: "https://github.com/miklywek/just-tech-news",
    },
    {
      name: "Dream Trip",
      stack: "Node, Express, MySQL, Sequelize ORM, ",
      link: "https://github.com/miklywek/dream-trip",
    },
  ];

  return (
    <div className="">
      {projects.map((project) => (
        <div
          className="project-container card mb-5 mt-5"
          style={{ maxWidth: "900px" }}
          key={project.name}
        >
          <div className="">
            <div className="card-body text-center">
              <h5 className="card-title h3 ">{project.name}</h5>
              <div className="mt-3 align-text-bottom ">
                <p className="card-text h4">{project.stack}</p>
                <p className="card-text ">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link text-center text-decoration-none fw-bolder h4"
                  >
                    Source Code <Github /> {project.link}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
