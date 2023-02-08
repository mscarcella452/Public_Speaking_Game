import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paper, Box } from "@mui/material";
import { cardOverlaySx, backgroundWordsOverlaySx } from "./SXstyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GamePage from "./Pages/GamePage";
import backgroundWords from "./Images/backgroundWords.png";
import SunnyspellsRegular from "./Fonts/SunnyspellsRegular.otf";

const theme = createTheme({
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
          overflow: "scroll",
          // background: "#981010",
          // background: `url(${backgroundWords}) no-repeat center`,
          // backgroundSize: "cover",
          // fontFamily: "'Solitreo', cursive",
          boxSizing: "border-box",
        }}
      >
        {/* <Box sx={{ ...cardOverlaySx, opacity: 0.2, zIndex: 5 }} />
        <Box sx={{ ...backgroundWordsOverlaySx, zIndex: 7 }} /> */}

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
