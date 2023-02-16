import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paper, Box, useMediaQuery } from "@mui/material";
import {
  Sx,
  flexBoxSx,
  fabricOverlaySx,
  backgroundWordsOverlaySx,
} from "./Styles/SXstyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GamePage from "./Pages/GamePage";
import backgroundWords from "./Images/backgroundWords.png";
import SunnyspellsRegular from "./Fonts/SunnyspellsRegular.otf";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          ...flexBoxSx,
          height: "100vh",
          boxSizing: "border-box",
          fontFamily: Sx.font.card,
          background: Sx.color.primary,
          // padding: Sx.padding.main,
          overflow: "scroll",
        }}
      >
        <Routes>
          <Route path='*' element={<GamePage />} />

          {/* <Route path='/PublicSpeaking'>
            <Route path=':Play' element={<GamePage />} />
            <Route path=':Rules' element={<RulesPage />} />
          </Route> */}
        </Routes>
        <Box sx={fabricOverlaySx} />
        <Box sx={backgroundWordsOverlaySx} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
