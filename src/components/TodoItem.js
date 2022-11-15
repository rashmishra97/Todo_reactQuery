import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { useMutation } from "react-query";
import { removeTopouchDB, updateDB } from "../pouchDatabase/PouchDB1";

const TodoItem = ({ tasksid }) => {
  const [editTask, setEditTask] = useState("");

  console.log("ITEM COMPONENET");

  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: () => removeTopouchDB(tasksid),
  });
  const remove = (event) => {
    event.preventDefault();
    mutate();
  };
  console.log("isLoading ", isLoading, "isSucess", isSuccess, "Error", isError);

  const {
    mutate: isMutate,
    isLoading: isLoader,
    isSuccess: isSuccer,
    isError: isErr,
  } = useMutation({
    mutationFn: () => updateDB(tasksid, { task: editTask }),
  });

  const edit = (event) => {
    event.preventDefault();
    isMutate();
  };

  // const edit = () => {
  //   updateDB(tasksid, { task: editTask });
  // };

  console.log(
    "isLoader",
    isLoader,
    "isSuccer",
    isSuccer,
    "isErr",
    isErr,
    "isMute",
    isMutate
  );

  return (
    <div className="space-y-5 flex space-x-5 items-center">
      <div className="flex space-x-5 space-y-2">
        <input
          type="text"
          onChange={(e) => {
            setEditTask(e.target.value);
          }}
          style={{ border: "2px solid black" }}
        />
        <button type="button" onClick={edit}>
          Edit
        </button>
        <button type="button" onClick={remove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default memo(TodoItem);

TodoItem.propTypes = {
  tasksid: PropTypes.string,
};

TodoItem.defaultProps = {
  tasksid: "id",
};
