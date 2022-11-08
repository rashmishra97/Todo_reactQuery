import React, { memo, useContext } from "react";
import PropTypes from "prop-types";

import { removeToDatabase } from "../db/PouchDB4";
import { ContextVar } from "../context/GlobalContext";

const TodoListItem = ({ tasks, tasksId, date }) => {
  const dataFromContext = useContext(ContextVar);

  const removeTodo = async () => {
    await removeToDatabase(tasksId);
    await dataFromContext?.getToDB();
  };

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="items-center">
        <li className="mt-3">{tasks}</li>
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
  tasks: PropTypes.string,
  tasksId: PropTypes.string,
  date: PropTypes.string,
};

TodoListItem.defaultProps = {
  tasks: "sample task",
  tasksId: "no id",
  date: "//-//-//",
};
