// BranchProvider.js
import React, { useReducer } from 'react';
import CreateContext from './CreateContext';

const reducer = (state, action) => {
  switch(action.type){
    case "Home":
    case "About":
    case "Search":
    case "Upcoming":
    case "Popular":
      return action.type;
    default:
      return state;
  }
};

export default function BranchProvider({ children }) {
  const [navItem, dispatch] = useReducer(reducer, "Home");

  return (
    <CreateContext.Provider value={{ navItem, dispatch }}>
      {children}
    </CreateContext.Provider>
  );
}