import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const ComponentItem = ({ name, desc, props }) => {
  const [open, setOpen] = useState(false);
  const propsRef = useRef();

  useEffect(() => {
    if (propsRef.current.style.maxHeight) {
      propsRef.current.style.maxHeight = null;
    } else {
      propsRef.current.style.maxHeight =
        propsRef.current.scrollHeight + 3 + "px";
    }
  }, [open]);

  return (
    <div className={`component-item ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)}>
        <h4>{name}</h4>
      </button>
      <div className="prop-table" ref={propsRef}>
        {desc && <p>{desc}</p>}
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop) => (
              <tr key={prop.name}>
                <td>{prop.name}</td>
                <td>{prop.type}</td>
                <td>{prop.default}</td>
                <td>{prop.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComponentItem;
