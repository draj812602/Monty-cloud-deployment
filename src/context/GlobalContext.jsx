// Global context
// We can store all the data which are going to be used throughout the application here.

import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const GlobalContextReducer = (state, action) => {
  switch (action.type) {
    case "toggle_side_bar":
      return {
        ...state,
        toggleState: action.payload,
      };
    case "search_input_fun":
      return {
        ...state,
        searchedTerm: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(GlobalContextReducer, {
    toggleState: true,
    searchedTerm: "",
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalStateContext);
export const useGlobalDispatch = () => useContext(GlobalDispatchContext);
