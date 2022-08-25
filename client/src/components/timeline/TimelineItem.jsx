import { BsFillRecord2Fill } from "react-icons/bs";

const TimelineItem = ({ time, title, desc, place }) => {
  return (
    <div className="step">
      <BsFillRecord2Fill className="step__icon" />
      <span className="step__time">2022-present</span>
      <h2>Master's Degree in Informatics</h2>
      <p className="step__desc">Specialization in Web applications</p>
      <h4>University of Rzeszów</h4>
    </div>
  );
};

export default TimelineItem;
