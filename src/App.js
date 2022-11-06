import React from "react";
import InsertRecord from "./InsertRecord";
import Retrive from "./Retrive";

const App = () => {
  console.log("App Compo");
  return (
    <div>
      <InsertRecord />
      <Retrive />
    </div>
  );
};

export default App;
