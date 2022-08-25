import SectionHeader from "../SectionHeader";
import TimelineItem from "../timeline/TimelineItem";

const AboutMe = () => {
  return (
    <section>
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
          <a href="#!" className="timeline__link timeline__link--active">
            EDUCATION
          </a>
          <span className="timeline__separator">|</span>
          <a href="#!" className="timeline__link">
            WORK EXPERIENCE
          </a>
        </div>
        <div className="timeline__wrapper">
          <div className="timeline__body">
            <TimelineItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
