import React from "react";
import useToggle from "../hooks/useTSToggle.tsx";

const TSToggle = () => {
  const [show, toggle, close, open] = useToggle(true);
  console.log(show, 100);
  return (
    <React.Fragment>
      <div>
        <h1>{show.toString()}</h1>
        <button onClick={toggle}>1</button>
        <button onClick={close}>2</button>
        <button onClick={open}>3</button>
      </div>
    </React.Fragment>
  );
};
export default TSToggle;
