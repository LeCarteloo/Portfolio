import "../../styles/projectPage.scss";
import TeamItem from "./TeamItem";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import projects from "../../db/projects.json";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";

const ProjectPage = () => {
  const [team, setTeam] = useState([]);
  const ref = useRef();
  const refContent = useRef();
  const params = useParams();

  projects = projects.filter((project) => project.isFeatured === true);

  // Searching open project in local JSON db
  const project = projects.find((elem) => elem._id.toString() === params.id);

  useEffect(() => {
    const getContributors = async () => {
      const response = await fetch(
        `https://api.github.com/repos/LeCarteloo/${project.repoName}/stats/contributors`
      );
      let data = await response.json();
      if (data.length > 0) {
        data = await data.sort((a, b) => (a.total < b.total ? 1 : -1));
      }
      setTeam(data);
    };

    ref.current.innerHTML = project.desc;
    refContent.current.innerHTML = project.content;
    getContributors();
  }, [params.id]);

  return (
    <main
      className="main showcase"
      style={{
        "--color": project.colors[0] + "CC",
      }}
    >
      <section>
        <img
          className="showcase__banner"
          src={project.photo}
          alt="project-banner"
        />
        <h2 className="showcase__title">THE PROJECT</h2>
        <div ref={ref} className="showcase__desc"></div>
        <div className="showcase__info">
          <div className="showcase__group">
            <h4>Used technologies:</h4>
            <div className="showcase__content">
              {project.technologies.map((tech) => (
                <svg key={tech.icon} width="70px" height="70px">
                  <image
                    href={`/icons/${tech.icon}.svg`}
                    width="70px"
                    height="70px"
                  >
                    <title>{tech.name}</title>
                  </image>
                </svg>
              ))}
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used tools:</h4>
            <div className="showcase__content">
              {project.tools.map((tool) => (
                <svg key={tool.icon} width="70px" height="70px">
                  <image
                    href={`/icons/${tool.icon}.svg`}
                    width="70px"
                    height="70px"
                  >
                    <title>{tool.name}</title>
                  </image>
                </svg>
              ))}
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used colors:</h4>
            <div className="showcase__content">
              {project.colors.map((color) => (
                <div
                  key={color}
                  className="showcase__color"
                  style={{ backgroundColor: color }}
                >
                  <span style={{ mixBlendMode: "difference" }}>{color}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used fonts:</h4>
            <div className="showcase__content">-</div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="showcase__title">TEAM</h2>
        <div className="showcase__team">
          {team.map((member, i) => (
            <TeamItem
              key={`member-${i}`}
              member={member}
              color={project.colors[0]}
            />
          ))}
        </div>
      </section>
      <div ref={refContent} className="showcase__desc"></div>
      <footer>
        {projects.map((project) => (
          <Link to={`/projects/${project._id}`}>
            <span>{project.name}</span>
          </Link>
        ))}
      </footer>
    </main>
  );
};

export default ProjectPage;
