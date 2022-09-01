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

const Main = () => {
  // Timeline data
  const education = [
    {
      _id: 1,
      year: "2022-present",
      name: "Master's Degree in Informatics",
      place: "University of Rzeszów",
    },
    {
      _id: 2,
      year: "2018-2022",
      name: "Engineer's Degree in Informatics",
      desc: "Specialization in Web applications",
      place: "University of Rzeszów",
    },
    {
      _id: 3,
      year: "2018-2022",
      name: "Engineer's Degree in Informatics",
      desc: "Specialization in Web applications",
      place: "University of Rzeszów",
    },
  ];

  console.log(projects);

  const work = [
    {
      _id: 1,
      year: "2022-present",
      name: "Company name",
      position: "Junior Fullstack Developer",
      taskList: ["UI Design", "DB Design", "REST API", "Validation"],
    },
    {
      _id: 2,
      year: "2022-present",
      name: "Company name",
      position: "Junior Fullstack Developer",
      taskList: ["UI Design", "DB Design", "REST API", "Validation"],
    },
  ];

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
            {projects.map((project) => (
              <FeaturedProject key={project._id} project={project} />
            ))}
          </div>
          <h2 className="projects__subtitle">OTHER PROJECTS</h2>
          <div className="projects__other">
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
          </div>
          <div className="more">
            <button className="more__button">SHOW MORE</button>
          </div>
        </div>
      </section>
      <AboutMe experience={work} education={education} />
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
              <h3>filippapiernik1999@gmail.com</h3>
            </div>
            <div className="contact__social">
              <a
                href="https://www.facebook.com/filip.papiernik.3"
                className="contact__item contact__item--facebook"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="https://github.com/LeCarteloo"
                className="contact__item contact__item--github"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/filip-papiernik-390444230/"
                className="contact__item contact__item--linkedin"
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
          See creation process of this website <u>here</u>
        </p>
      </footer>
    </main>
  );
};

export default Main;
