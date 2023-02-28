import React, { useContext } from "react";

import {
  Sx,
  flexBoxSx,
  mainBoxSx,
  backgroundWordsOverlaySx,
} from "../Styles/SXstyles";
import { Box } from "@mui/material";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FabricOverlay } from "../Components/Helpers/Overlays";
import MainBackground from "../Components/Helpers/MainBackground";

import { MainFlipContainer } from "../Components/Helpers/FlipContainer";
import OverlayContainer from "../Components/OverlayContainer";

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
        <Box sx={{ ...mainBoxSx }}>
          <MainFlipContainer active={game.flip} />
        </Box>
        <Footer />
      </Box>
      <FabricOverlay />
      <Box sx={backgroundWordsOverlaySx} />
      <OverlayContainer />
    </MainBackground>
  );
}
