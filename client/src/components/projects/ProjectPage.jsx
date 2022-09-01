import "../../styles/projectPage.scss";
import { FaReact, FaSass } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import TeamItem from "./TeamItem";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectsJSON from "../../db/projects.json";
import SectionTitle from "./SectionTitle";

const ProjectPage = () => {
  const [team, setTeam] = useState([]);
  const params = useParams();

  // Searching open project in local JSON db
  const project = ProjectsJSON.find(
    (elem) => elem._id.toString() === params.id
  );

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

    getContributors();
  }, []);

  return (
    <main className="main showcase">
      <section>
        <SectionTitle title="THE PROJECT" color={project.colors[0]} />
        <p>{project.desc}</p>
        <div className="showcase__info">
          <div className="showcase__group">
            <h4>Used technologies:</h4>
            <div className="showcase__content">
              {project.technologies.map((tech) => (
                <img
                  width="70px"
                  height="70px"
                  src={`/icons/${tech.icon}.svg`}
                />
              ))}
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used tools:</h4>
            <div className="showcase__content">
              {project.tools.map((tool) => (
                <img
                  width="70px"
                  height="70px"
                  src={`/icons/${tool.icon}.svg`}
                />
              ))}
            </div>
          </div>
          <div className="showcase__group">
            <h4>Used colors:</h4>
            <div className="showcase__content">
              {project.colors.map((color) => (
                <div
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
        <SectionTitle title="TEAM" color={project.colors[0]} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos,
          repellendus deleniti perferendis dolor nisi? Delectus, consequatur
          ratione. Doloremque dolores hic aspernatur adipisci odio, quia quos
          nam ducimus accusantium molestias!
        </p>
        <div className="showcase__team">
          {team.map((member) => (
            <TeamItem member={member} color={project.colors[0]} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectPage;
