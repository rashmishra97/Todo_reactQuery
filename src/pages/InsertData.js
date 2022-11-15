import React, { useState } from "react";
import { useMutation } from "react-query";
import { insertTopouchDB } from "../pouchDatabase/PouchDB1";
import FetchData from "../components/FetchData";

const InsertData = () => {
  const [inputlst, setInputlst] = useState("");

  console.log("Insert componenet");

  const eventHandler = (e) => {
    setInputlst(e.target.value);
  };

  // const submitListener = async (e) => {
  //   e.preventDefault();
  //   const newTodoList = {
  //     task: inputlst,
  //   };
  //   await insertTopouchDB(newTodoList);
  //   // eslint-disable-next-line no-unused-expressions
  //   submitListener.dataFun;
  // };

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (newTodoparam) => insertTopouchDB(newTodoparam),
  });

  const submitListener = (event) => {
    event.preventDefault();
    const newTodoList = {
      task: inputlst,
    };
    mutate(newTodoList);
  };

  console.log("isLoading ", isLoading, "isSucess", isSuccess, "Error", isError);

  // const { data, error, isLoading } = useQuery("key", async () => {
  //   const dataList = await getTopouchDB();
  //   console.log("90000000099090 ", dataList);
  // });
  // console.log("Insert Data===== ", data, "err", error, "isLoadng", isLoading);

  return (
    <div className="">
      <h1>Todo Task</h1>
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
      <FetchData />
    </div>
  );
};

export default InsertData;

// InsertToDo.propTypes = {
//   getToDBFun: PropTypes.func,
// };

// InsertToDo.defaultProps = {
//   // task: "sample task",
//   // taskId: "no id",
//   getToDBFun: () => {},
// };
