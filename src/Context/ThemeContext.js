import React, { createContext } from "react";
import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";

export const themeContext = createContext();

function ThemeContextProvider({ children }) {
  const galaxy = useMediaQuery("(max-width: 900px, max-height: 450px )");
  const ipadHorizontal = useMediaQuery(
    "(max-width: 1200px, max-height: 900px, )"
  );

  const gameTheme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 600,
        lg: 900,
        xl: 1200,
      },
    },
  });
  return (
    <themeContext.Provider value={gameTheme}>{children}</themeContext.Provider>
  );
}

export default ThemeContextProvider;
