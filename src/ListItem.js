import React, { memo } from "react";
import PropTypes from "prop-types";
import { removeToDatabase } from "./PouchDB4";

const TodoListItem = ({ task, taskId, getToDB, date }) => {
  // console.log("TodoListItem", todoIndex);
  const removeTodo = async () => {
    // const newTodo = itemsList.filter((item) => item.id !== taskId);
    // setItemsList(newTodo);
    await removeToDatabase(taskId);
    await getToDB();
  };

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="items-center">
        <li className="mt-3">{task}</li>
        <li className="mt-3">{date}</li>
      </div>
      <div className=" space-x-5 space-y-2">
        <button type="button" onClick={removeTodo}>
          X
        </button>
      </div>
    </div>
  );
};

export default memo(TodoListItem);

TodoListItem.propTypes = {
  task: PropTypes.string,
  taskId: PropTypes.string,
  date: PropTypes.string,
  getToDB: PropTypes.func,
};

TodoListItem.defaultProps = {
  task: "sample task",
  taskId: "no id",
  date: "//-//-//",
  getToDB: () => {},
};
