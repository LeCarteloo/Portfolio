import "../../styles/projectPage.scss";
import TeamItem from "./TeamItem";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import projects from "../../db/projects.json";
import { useRef } from "react";
import { RiGitRepositoryLine, RiRecordCircleLine } from "react-icons/ri";
import VideoPlayer from "./VideoPlayer";
import LoadingSpinner from "../LoadingSpinner";
import ComponentItem from "./ComponentItem";

const ProjectPage = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [project, setProject] = useState();
  const [team, setTeam] = useState();
  const refDesc = useRef();
  const refContent = useRef();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Getting only featured projects
    const featuredProjects = projects.filter(
      (project) => project.isFeatured === true
    );

    // Searching open project in local JSON db by route name
    const project = featuredProjects.find(
      (elem) => elem?.repoName.toString() === params.name
    );

    if (!project) {
      return navigate("/404", { replace: true });
    }

    setFeaturedProjects(featuredProjects);
    setProject(project);

    const getContributors = async () => {
      const response = await fetch(
        `https://api.github.com/repos/LeCarteloo/${project?.repoName}/stats/contributors`
      );
      let data = await response.json();
      if (data.length > 0) {
        data = await data.sort((a, b) => (a.total < b.total ? 1 : -1));
      }
      setTeam(data);
    };

    refDesc.current.innerHTML = project.desc ? project.desc : "";
    refContent.current.innerHTML = project.content ? project.content : "";
    getContributors();
  }, [params.name]);

  return (
    <main
      className="main showcase"
      style={{
        "--color": project && project.colors[0] + "CC",
        "--full-color": project && project.colors[0],
      }}
    >
      <section>
        <img
          className="showcase__banner"
          src={project?.photo}
          alt="project-banner"
          loading="lazy"
        />
        <div className="showcase__links">
          <a
            className={`showcase__link ${
              !project?.links.repo && "showcase__link--disabled"
            }`}
            tabIndex={!project?.links.repo ? -1 : 0}
            aria-disabled={!project?.links.repo}
            href={project?.links.repo ? project?.links.repo : "!#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGitRepositoryLine size="25px" />
            REPOSITORY
          </a>
          <a
            className={`showcase__link ${
              !project?.links.live && "showcase__link--disabled"
            }`}
            tabIndex={!project?.links.live ? -1 : 0}
            aria-disabled={!project?.links.live}
            href={project?.links.live ? project?.links.live : "!#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiRecordCircleLine size="25px" />
            LIVE
          </a>
        </div>
        {project?.note && (
          <div className="showcase__note">
            <span>*Note:</span>
            <span>{` ${project?.note}`}</span>
          </div>
        )}

        <h2 className="showcase__title">THE PROJECT</h2>
        <div ref={refDesc} className="showcase__desc"></div>
        <div className="showcase__info">
          <div className="showcase__group">
            <h4>Used technologies:</h4>
            <div className="showcase__content">
              {project?.technologies.map((tech) => (
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
              {project?.tools.map((tool) => (
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
              {project?.colors.map((color) => (
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
            <div className="showcase__content">
              {project?.font ? <img src={project.font} alt="Font type" /> : "-"}
            </div>
          </div>
        </div>
      </section>
      <section>
        <h2 className="showcase__title">TEAM</h2>
        <div className="showcase__team">
          {team && team.length > 0 ? (
            team.map((member, i) => (
              <TeamItem
                key={`member-${i}`}
                member={member}
                color={project?.colors[0]}
              />
            ))
          ) : (
            <LoadingSpinner />
          )}
        </div>
      </section>
      {project?.video && (
        <section>
          <h2 className="showcase__title">VIDEO</h2>
          {/* <VideoPlayer videoPath={project.video} /> */}
          <video className="video" src={project.video} controls></video>
        </section>
      )}
      {project?.componentAPI && (
        <section>
          <h2 className="showcase__title">COMPONENTS</h2>
          <img
            className="showcase__img"
            loading="lazy"
            src={project.componentAPI.img}
          />
          {project.componentAPI.components.map((component) => (
            <ComponentItem
              key={component.id}
              name={component.name}
              desc={component.desc}
              props={component.props}
            />
          ))}
        </section>
      )}
      <div ref={refContent} className="showcase__desc"></div>
      <footer>
        {featuredProjects.map((project) => (
          <Link key={project?._id} to={`/projects/${project?.repoName}`}>
            <span>{project?.name}</span>
          </Link>
        ))}
      </footer>
    </main>
  );
};

export default ProjectPage;
