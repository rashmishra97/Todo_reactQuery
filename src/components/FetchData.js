import React from "react";
import { useQuery } from "react-query";
import { getTopouchDB } from "../pouchDatabase/PouchDB1";

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
          <li key={item.id}>{item.doc.task}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;

// import { useQuery } from "react-query";
// import { getTopouchDB } from "../pouchDatabase/PouchDB1";
// // import TodoItem from "./TodoItem";

// const FetchData = () => {
//   const { data, error, isLoading } = useQuery("key", () => {
//     getTopouchDB();
//   });

//   console.log("data ", data, "err ", error, "isLoadnd ", isLoading);
//     return(
//       <div>
//         <h1></h1>
//       </div>
//     )
// };

// export default FetchData;

// TodoListItem.propTypes = {
//   itemsList: PropTypes.array.isRequired,
//   getToDBFun: PropTypes.func.isRequired,
// };

// TodoListItem.defaultProps = {
//   itemsList: [],
//   getToDBFun: () => {},
// };

/* <ul className="ml-5">
        {dataList?.list.map((item, indx) => (
          <TodoItem
            task={item.doc.task}
            taskId={item.id}
            key={item.id}
            // getToDBFunction={dataList?.getToDBFunction}
            todoIndex={indx}
          />
        ))}
      </ul> */
