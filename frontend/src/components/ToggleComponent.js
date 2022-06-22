import React from "react";
import useToggle from "../hooks/useToggle.jsx";

const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);

  return (
    <React.Fragment>
      <div>
        <h1>{value.toString()}</h1>
        <button type="button" onClick={toggleValue}>
          Toggle
        </button>
        <button type="button" onClick={() => toggleValue(true)}>
          Make true
        </button>
        <button type="button" onClick={() => toggleValue(false)}>
          Make false
        </button>
      </div>
    </React.Fragment>
  );
};

export default ToggleComponent;
