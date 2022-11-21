import React from "react";
import { useQuery } from "react-query";
import { getTopouchDB } from "../pouchDatabase/PouchDB1";
import TodoItem from "./TodoItem";
import { GET_TODOS } from "../utils/contants";

const TodoList = () => {
  const { isLoading, data, isError } = useQuery(GET_TODOS, getTopouchDB);

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  console.log("error ", isError, "Loading", isLoading);
  return (
    <div>
      <ul>
        {data?.rows?.map((item) => (
          <div className="flex space-x-4">
            <li className="w-10" key={item.id}>
              {item.doc.task}
            </li>
            <TodoItem tasksid={item.id} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
