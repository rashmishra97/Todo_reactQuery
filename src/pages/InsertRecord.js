import React, { useState, useContext } from "react";
import Retrive from "../component/Retrive";
import { ContextVar } from "../context/GlobalContext";
import { insertDatabase } from "../db/PouchDB4";

const InsertRecord = () => {
  const [myInputlist, setMyInputlist] = useState("");
  const dataVal = useContext(ContextVar);

  const itemEvent = (e) => {
    setMyInputlist(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const username = "user";

    // if (myInputlist === "" || myInputlist !== username) {
    //   console.log("vghvghvh");
    //   alert("Please Sign In First");
    //   setMyInputlist("");
    //   return;
    // }

    const todoList = {
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
      <form onSubmit={handleSubmit} name="myForm">
        <input
          name="myTodo"
          type="text"
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
