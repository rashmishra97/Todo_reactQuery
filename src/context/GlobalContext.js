import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getToDatabase } from "../db/PouchDB4";

export const ContextVar = createContext();

export const GlobalContext = ({ children }) => {
  const [listRecord, setListRecord] = useState([]);

  const getToDB = async () => {
    const dataList = await getToDatabase();
    setListRecord(dataList?.rows);
  };

  // value is object , we wrap it to Memo
  const myValue = React.useMemo(() => ({ getToDB, listRecord }), [listRecord]);

  useEffect(() => {
    getToDB();
  }, []);

  console.log("render info", myValue);
  return (
    // children is App component
    <ContextVar.Provider value={myValue}>{children}</ContextVar.Provider>
  );
};

GlobalContext.propTypes = {
  children: PropTypes.objectOf(PropTypes.node).isRequired,
};
