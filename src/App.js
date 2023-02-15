import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paper, Box } from "@mui/material";
import {
  Sx,
  cardOverlaySx,
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
          height: "100vh",
          boxSizing: "border-box",
          fontFamily: Sx.font.card,
          // padding: Sx.padding.main,
          overflow: "scroll",
        }}
      >
        <Box sx={fabricOverlaySx} />
        <Box sx={backgroundWordsOverlaySx} />
        <Routes>
          <Route path='*' element={<GamePage />} />

          {/* <Route path='/PublicSpeaking'>
            <Route path=':Play' element={<GamePage />} />
            <Route path=':Rules' element={<RulesPage />} />
          </Route> */}
        </Routes>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
