import React, { memo } from "react";
import PropTypes from "prop-types";
import { removeTopouchDB } from "../pouchDatabase/PouchDB1";
// import { GlobalInfo } from "../contexts/GlobalContext";

const TodoItem = ({ task, taskId }) => {
  // const dataFromContext = useContext(GlobalInfo);

  console.log("ITEM COMPONENET");

  const remove = async () => {
    await removeTopouchDB(taskId);
    // await dataFromContext.getToDBFunction();
  };

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="items-center">
        <li className="mt-3">{task}</li>
      </div>
      <div className=" space-x-5 space-y-2">
        <button type="button" onClick={remove}>
          X
        </button>
      </div>
    </div>
  );
};

export default memo(TodoItem);

TodoItem.propTypes = {
  task: PropTypes.string,
  taskId: PropTypes.string,
};

TodoItem.defaultProps = {
  task: "task",
  taskId: "id",
};
