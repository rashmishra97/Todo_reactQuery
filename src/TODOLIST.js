import React, { useContext } from "react";
// import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import { GlobalInfoVar } from "./GlobalInfo";

// eslint-disable-next-line react/prop-types
const TODOList = () => {
  const data = useContext(GlobalInfoVar);
  console.log(data, "7777");

  return (
    <div>
      <ul className="ml-5">
        {data?.itemsList.map(
          (
            itemvalue,
            index // here is a nested return
          ) => (
            <TodoListItem
              task={itemvalue.doc.task}
              taskId={itemvalue.id}
              key={itemvalue.id}
              getToDBFun={data?.getToDBFun}
              todoIndex={index}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default TODOList;

// TodoListItem.propTypes = {
//   itemsList: PropTypes.array.isRequired,
//   getToDBFun: PropTypes.func.isRequired,
// };

// TodoListItem.defaultProps = {
//   itemsList: [],
//   getToDBFun: () => {},
// };
