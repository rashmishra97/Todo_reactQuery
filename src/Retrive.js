import React, { useContext } from "react";
import { ContextVar } from "./GlobalContext";
// import PropTypes from "prop-types";
import TodoListItem from "./ListItem";

// eslint-disable-next-line react/prop-types
const Retrive = () => {
  const data = useContext(ContextVar);
  console.log(data, "7777");

  return (
    <div>
      <ul className="ml-5">
        {data?.listRecord
          .sort((a, b) => new Date(b.doc.date) - new Date(a.doc.date))
          .map(
            (
              itemvalue,
              index // here is a nested return
            ) => (
              <TodoListItem
                task={itemvalue.doc.task}
                date={itemvalue.doc.date}
                taskId={itemvalue.id}
                key={itemvalue.id}
                getToDB={data?.getToDB}
                todoIndex={index}
              />
            )
          )}
      </ul>
    </div>
  );
};

export default Retrive;
