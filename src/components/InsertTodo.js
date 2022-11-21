import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { insertTopouchDB } from "../pouchDatabase/PouchDB1";
import { GET_TODOS } from "../utils/contants";

const InsertTodo = () => {
  const [inputlst, setInputlst] = useState("");
  const queryClient = useQueryClient();
  const eventHandler = (e) => {
    setInputlst(e.target.value);
  };

  const { mutate } = useMutation(insertTopouchDB, {
    onSuccess: () => {
      queryClient.invalidateQueries(GET_TODOS);
    },
  });

  const submitListener = (event) => {
    event.preventDefault();
    const newTodoList = {
      task: inputlst,
    };
    mutate(newTodoList);
    setInputlst("");
  };

  return (
    <div className="">
      <form onSubmit={submitListener} name="myForm">
        <input
          name="myTodo"
          type="text"
          required
          placeholder="Add Tasks"
          value={inputlst}
          onChange={eventHandler}
          className="border border-black py-1 px-2 "
        />
        <button
          type="submit"
          name="myForm"
          className="ml-5 border-black bg-slate-700 px-3 py-1 text-white"
        >
          Add
        </button>
      </form>
      {/* <FetchData data={data} /> */}
    </div>
  );
};

export default InsertTodo;
