// Components
import SectionHeader from "./SectionHeader";
import Project from "./projects/Project";
import FeaturedProject from "./projects/FeaturedProject";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
// Stylesheets
import "../styles/main.scss";
import "../styles/projects.scss";
// Assets
import AboutMe from "./sections/AboutMe";
// JSON db
import projects from "../db/projects.json";
import users from "../db/users.json";
import { Link } from "react-router-dom";

const Main = () => {
  const owner = users.find((user) => user.isOwner === true);

  const featuredProjects = projects.filter(
    (project) => project.isFeatured === true && project._id !== 0
  );
  const otherProjects = projects.filter(
    (project) => project.isFeatured === false
  );

  return (
    <main>
      <section className="welcome">
        <div className="welcome__text">
          <h3>Hi, my name is</h3>
          <h1>Filip Papiernik</h1>
          <h2>I create web applications</h2>
        </div>
        <a href="#projects" className="welcome__link">
          Check my projects
        </a>
      </section>
      <section id="projects">
        <SectionHeader number={"01"} title={"PROJECTS"} />
        <div className="projects">
          <h2 className="projects__subtitle">FEATURED PROJECTS</h2>
          <div className="projects__featured">
            {featuredProjects.map((project) => (
              <FeaturedProject key={project._id} project={project} />
            ))}
          </div>
          <h2 className="projects__subtitle">OTHER PROJECTS</h2>
          <div className="projects__other">
            {otherProjects.map((project) => (
              <Project key={project._id} project={project} />
            ))}
          </div>
          {/* <div className="more">
            <button className="more__button">SHOW MORE</button>
          </div> */}
        </div>
      </section>
      <AboutMe
        experience={owner.experience}
        education={owner.education}
        technologies={owner.technologies}
      />
      <section id="contact" className="contact">
        <SectionHeader title="Contact" number="03" />
        <div className="contact__wrapper">
          <div className="contact__left">
            <h2>Want to message me?</h2>
            <p>
              If you would like to get in touch, email me or send a message with
              the contact form
            </p>
            <div className="contact__email">
              <BsFillEnvelopeFill />
              <h3>{owner.email}</h3>
            </div>
            <div className="contact__social">
              <a
                href={owner.links.facebook}
                className="contact__item contact__item--facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare />
              </a>
              <a
                href={owner.links.github}
                className="contact__item contact__item--github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href={owner.links.linkedin}
                className="contact__item contact__item--linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="contact__right">
            <form>
              <label>
                Email adress
                <input type="email" />
              </label>
              <label>
                Subject
                <input type="text" />
              </label>
              <label>
                Message
                <textarea type="text" />
              </label>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Designed and build by <b>Filip Papiernik</b>
        </p>
        <p>
          See creation process of this website
          <Link to="/projects/Portfolio">
            <u>here</u>
          </Link>
        </p>
      </footer>
    </main>
  );
};

export default Main;
