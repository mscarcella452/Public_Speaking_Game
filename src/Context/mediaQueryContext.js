import React, { createContext } from "react";
import { useMediaQuery } from "@mui/material";

export const mediaQueryContext = createContext();

function MediaQueryContextProvider({ children }) {
  const screen = {
    lg: useMediaQuery("(min-width: 720px)  and (min-height: 720px)"),
    md: useMediaQuery("(min-width: 500px) and (min-height: 415px)"),
    sm: useMediaQuery("(min-width: 360px) and (min-height: 481px)"),
    xs: useMediaQuery("(max-width: 320px) or (max-height: 320px)"),
    justify: useMediaQuery("(min-width: 900px) and (min-height: 800px)"),
  };
  return (
    <mediaQueryContext.Provider value={screen}>
      {children}
    </mediaQueryContext.Provider>
  );
}

export default MediaQueryContextProvider;
