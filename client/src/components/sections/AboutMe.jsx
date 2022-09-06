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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          commodi error, quo eaque autem voluptatem aliquam consectetur. Unde,
          dolores. Sed ratione maiores numquam debitis dolor nulla dignissimos
          quae ea! Quam hic nostrum ea quas distinctio velit natus quaerat, nisi
          illum.
        </p>
        <p className="about__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          commodi error, quo eaque autem voluptatem aliquam consectetur. Unde,
          dolores. Sed ratione maiores numquam debitis dolor nulla dignissimos
          quae ea! Quam hic nostrum ea quas distinctio velit natus quaerat, nisi
          illum.
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
