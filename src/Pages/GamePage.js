import React, { useContext } from "react";
import {
  Sx,
  flexBoxSx,
  mainBoxSx,
  backgroundWordsOverlaySx,
} from "../Styles/SXstyles";
import { Paper, Box } from "@mui/material";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import { FabricOverlay } from "../Components/Helpers/Overlays";
import { MainFlipContainer } from "../Components/Helpers/FlipContainer";
import OverlayContainer from "../Components/OverlayContainer";
import { activeContext } from "../Context/ButtonContext";

export default function GamePage() {
  const active = useContext(activeContext);

  return (
    <Paper sx={backgroundPageSx}>
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
    </Paper>
  );
}

const backgroundPageSx = {
  ...flexBoxSx,
  height: "100%",
  background: "transparent",
  position: "relative",
  // background: Sx.color.primary,
  overflow: "scroll",
  padding: Sx.padding.main,
};
