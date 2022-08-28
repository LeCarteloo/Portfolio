import { useState } from "react";
import SectionHeader from "../SectionHeader";
import TimelineItem from "../timeline/TimelineItem";
import JS from "../../assets/javascript.svg";
import StackItem from "../stack/StackItem";

const AboutMe = ({ education, experience, technologies }) => {
  const [timeline, setTimeline] = useState("education");

  const styles = {
    myStyleClassName: {
      padding: "16px 0px 16px 0px",
      "& a": {
        textDecoration: "none",
        color: "#0000ee",
      },
      "& a:hover": {
        textDecoration: "underline",
      },
    },
    myButtonClass: {
      "&:hover": {
        backgroundColor: "red",
      },
    },
  };

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
          <a
            href="#!"
            className={`timeline__link ${
              timeline === "education" ? "timeline__link--active" : ""
            }`}
            onClick={() => setTimeline("education")}
          >
            EDUCATION
          </a>
          <span className="timeline__separator">|</span>
          <a
            href="#!"
            className={`timeline__link ${
              timeline === "experience" ? "timeline__link--active" : ""
            }`}
            onClick={() => setTimeline("experience")}
          >
            WORK EXPERIENCE
          </a>
        </div>
        <div className="timeline__wrapper">
          <div className="timeline__body">
            {timeline === "education" ? (
              <>
                <TimelineItem />
                <TimelineItem />
              </>
            ) : (
              <TimelineItem />
            )}
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
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
          <StackItem name="JavaScript" color="#F0DB4F" img={JS} />
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;
