import React, { useReducer } from "react";
import MainReducer from "./mainReducer";
import MainContext from "./mainContext";

const MainState = (props) => {
  const initialState = {
   
   
    step:0,
    color:"#555555",
    info:{},
    title:""

  };

  const [state, dispatch] = useReducer(MainReducer, initialState);

  return (
    <MainContext.Provider value={[state, dispatch]}>
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
