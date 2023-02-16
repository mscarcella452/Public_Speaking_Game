import React, { useState, useEffect, useContext } from "react";

import { Sx, flexBoxSx, mainBoxSx } from "../Styles/SXstyles";
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
          gap: Sx.gap.main,
        }}
      >
        <Header />
        {/* <MainFlipContainer active={game.flip} /> */}

        <Box sx={{ ...mainBoxSx }}>
          <MainFlipContainer active={game.flip} />
        </Box>
        <Footer />
      </Box>
      <OverlayContainer />
    </MainBackground>
  );
}
