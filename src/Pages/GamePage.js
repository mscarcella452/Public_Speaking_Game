import React, { useState, useEffect, useContext } from "react";

import {
  Sx,
  flexBoxSx,
  mainBoxSx,
  fabricOverlaySx,
  backgroundWordsOverlaySx,
} from "../Styles/SXstyles";
import { Paper, Box, Button, useMediaQuery } from "@mui/material";
import Header from "../ComponentHelpers/Header";
import Footer from "../ComponentHelpers/Footer";
import MainBackground from "../ComponentHelpers/MainBackground";

import { MainFlipContainer } from "../ComponentHelpers/FlipContainer";
import OverlayContainer from "../ComponentHelpers/OverlayContainer";

import { gameContext } from "../Context/GameStatusContext";

export default function GamePage() {
  const game = useContext(gameContext);

  return (
    <MainBackground>
      <Box
        sx={{
          ...flexBoxSx,
          flexDirection: "column",
          justifyContent: Sx.justifyContent,
          ...Sx.gap.main,
        }}
      >
        <Header />
        {/* <MainFlipContainer active={game.flip} /> */}

        <Box sx={{ ...mainBoxSx }}>
          <MainFlipContainer active={game.flip} />
        </Box>
        <Footer />
      </Box>
      {/* <Box
        sx={{
          background: `url("https://clipground.com/images/anxiety-fear-clipart-1.png") repeat center`,
          backgroundSize: "200px",
          opacity: 0.5,
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 7,
        }}
      /> */}
      <Box sx={fabricOverlaySx} />
      <Box sx={backgroundWordsOverlaySx} />
      <OverlayContainer />
    </MainBackground>
  );
}
