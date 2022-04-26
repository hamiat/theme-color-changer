import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useTheme = () => {
  //context contains values and functions in the themecontext.provider eg. color or changeColor
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme() must be used inside a ThemeProvider");
  }

  return context;
};
