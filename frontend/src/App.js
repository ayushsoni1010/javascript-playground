import React from "react";
import "./App.css";
import ToggleComponent from "./components/ToggleComponent";
import TSToggle from "./components/TSToggle";
import UpdateEffectComponent from "./components/UpdateEffectComponent";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <ToggleComponent />
        <UpdateEffectComponent />
        <TSToggle />
      </div>
    </React.Fragment>
  );
}

export default App;
