import { useState } from "react";
import SectionHeader from "../SectionHeader";
import EducationItem from "../timeline/EducationItem";
import StackItem from "../stack/StackItem";
import ExperienceItem from "../timeline/ExperienceItem";

const AboutMe = ({ education, experience, technologies }) => {
  const [timeline, setTimeline] = useState("education");

  return (
    <section id="about">
      <SectionHeader number={"02"} title={"ABOUT ME"} />
      <div className="about">
        <p className="about__desc">
          Hi, my name is Filip and I love to develop applications. My interest
          in IT started in 2014 when I created my own website, created using
          HTML and CSS. The website was quite simple but it gave me enough
          excitement to start developing in this direction.
        </p>
        <p className="about__desc">
          After my initial adventure with web applications, I started to write
          code in C++, and then in Java. While developing desktop application in
          Java, my knowledge expanded to include such things as: object-oriented
          programming, unit testing, REST APIs. I am currently focusing on
          React.js and Node.js.
        </p>
      </div>
      <div className="timeline">
        <div className="timeline__nav">
          <button
            className={`timeline__link ${
              timeline === "education" ? "timeline__link--active" : ""
            }`}
            onClick={() => setTimeline("education")}
            disabled={education.length === 0}
          >
            EDUCATION
          </button>
          <span className="timeline__separator">|</span>
          <button
            className={`timeline__link ${
              timeline === "experience" ? "timeline__link--active" : ""
            }`}
            onClick={() => setTimeline("experience")}
            disabled={experience.length === 0}
          >
            WORK EXPERIENCE
          </button>
        </div>
        <div className="timeline__wrapper">
          <div className="timeline__body">
            {timeline === "education"
              ? education.map((elem) => (
                  <EducationItem key={elem._id} {...elem} />
                ))
              : experience.map((elem) => (
                  <ExperienceItem key={elem._id} {...elem} />
                ))}
          </div>
        </div>
      </div>
      <div className="stack">
        <div className="stack__header">
          <span>TECHNOLOGIES</span>
          <span>-TECHNOLOGIES</span>
          <span>-TECHNOLOGIES</span>
        </div>
        <ul className="stack__list">
          {technologies.map((tech) => (
            <StackItem
              key={tech.icon}
              name={tech.name}
              color={tech.color}
              img={`/icons/${tech.icon}.svg`}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
