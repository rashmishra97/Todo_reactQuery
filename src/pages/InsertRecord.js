import React, { useState, useContext } from "react";
import { ContextVar } from "../context/GlobalContext";
// import PropTypes from "prop-types";
import { insertDatabase } from "../db/PouchDB4";
import Retrive from "../component/Retrive";

const InsertRecord = () => {
  const [myInputlist, setMyInputlist] = useState("");
  const dataVal = useContext(ContextVar);
  // getFuvc,itemlist=[]
  const itemEvent = (e) => {
    setMyInputlist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const todoList = {
      // id: responseID.id,
      task: myInputlist, // .toLocaleString("en-US", { day: "2-digit" }
      date: new Date(),
    };
    console.log("date======= ", todoList.date);
    const responseID = await insertDatabase(todoList);
    // console.log("newTodo data is getToDB ", newTodo);
    todoList.id = responseID?.id;
    setMyInputlist("");
    const ret = await dataVal?.getToDB(); // need to understand
    console.log("ret======== ", ret);
  };

  return (
    <div className="">
      {/* <h1 className=" text-center text-3></h1> */}
      <form onSubmit={handleSubmit} name="myForm">
        <input
          name="myTodo"
          type="text"
          required={React}
          placeholder="Add Tasks"
          value={myInputlist}
          onChange={itemEvent}
          className="border border-black py-1 px-2 "
        />
        <button
          type="submit"
          name="myForm"
          className="ml-5 border-black bg-slate-700 px-3 py-1 text-white"
        >
          Click Me
        </button>
      </form>
      <Retrive />
    </div>
  );
};

export default InsertRecord;

// InsertToDo.propTypes = {
//   getToDBFun: PropTypes.func,
// };

// InsertToDo.defaultProps = {
//   // task: "sample task",
//   // taskId: "no id",
//   getToDBFun: () => {},
// };
