import { useState } from "react";

const StackItem = ({ color, img, name }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="stack__item"
      style={{ backgroundColor: hover && color, color: hover && "#101322" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        style={{
          filter:
            hover &&
            "brightness(0) saturate(100%) invert(8%) sepia(7%) saturate(3405%)\
            hue-rotate(193deg) brightness(96%) contrast(101%)",
        }}
        src={img}
      />
      <span style={{ color: hover && "#101322" }}>{name}</span>
    </li>
  );
};

export default StackItem;
