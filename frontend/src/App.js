import React from "react";
import "./App.css";
import ToggleComponent from "./components/ToggleComponent";
import UpdateEffectComponent from "./components/UpdateEffectComponent";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <ToggleComponent />
        <UpdateEffectComponent />
      </div>
    </React.Fragment>
  );
}

export default App;
