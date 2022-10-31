import React from "react";
import InsertTODO from "./InsertTODO";
// import { getToDB } from "./PouchDB";
import TODOLIST from "./TODOLIST";

const App = () => {
  console.log("App Compo");
  return (
    <div>
      <InsertTODO />
      <TODOLIST />
      <div>huhuihiug</div>
    </div>
  );
};

export default App;
