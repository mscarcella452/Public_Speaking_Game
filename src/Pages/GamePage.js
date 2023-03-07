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
import { activeContext } from "../Context/ButtonContext";

export default function GamePage() {
  const active = useContext(activeContext);

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
        <Header active={active} />
        <Box sx={mainBoxSx}>
          <MainFlipContainer active={active.main.container} />
        </Box>
        <Footer active={active} />
      </Box>
      <FabricOverlay />
      <Box sx={backgroundWordsOverlaySx} />
      <OverlayContainer active={active} />
    </MainBackground>
  );
}
