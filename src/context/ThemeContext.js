import { createContext, useReducer } from "react";

export const ThemeContext = createContext();

//takes in current up-to-date state and action object (passed into the dispatch call)
const themeReducer = (state, action) => {
  //check action type, if it's equal to the same type as in the dispatch call, return new state object with a new color value
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      return { ...state, mode: action.payload };
    //update the state value in the ThemeProvider hook
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  //useReducer hook that takes in the themeReducer function (to be used to update the state) and an value initial for state.
  const [state, dispatch] = useReducer(themeReducer, {
    color: "#c1c1c1",
    mode: "light"
  });

  const changeColor = (color) => {
    //dispatch call takes in an object as an argument called dispatch action, which we can specify the properties type and payload
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  const changeMode = (mode) => {
    dispatch({ type: "CHANGE_MODE", payload: mode });
  };

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
