import React from "react";
import { useQuery } from "react-query";
import { getTopouchDB } from "../pouchDatabase/PouchDB1";
import TodoItem from "./TodoItem";

const FetchData = () => {
  const { data, error, isLoading } = useQuery("key", async () => {
    const dataList = await getTopouchDB();
    return dataList;
  });

  console.log("data==== ", data, "err", error, "isLoadng", isLoading);

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

export default FetchData;
