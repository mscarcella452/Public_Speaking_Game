import React, { useState, useEffect, useContext } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useNavigate } from "react-router-dom";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";

import {
  flexBoxSx,
  mainFlipContainerSx,
  cardOverlaySx,
  backgroundWordsOverlaySx,
  mainBoxSx,
} from "../SXstyles";
import styled from "styled-components";
import { Paper, Box, Button } from "@mui/material";
import Header from "../ComponentHelpers/Header";
import Footer from "../ComponentHelpers/Footer";
import MainBackground from "../ComponentHelpers/MainBackground";

import FlipContainer from "../ComponentHelpers/FlipContainer";
import OverlayContainer from "../ComponentHelpers/OverlayContainer";

import { gameContext } from "../Context/GameStatusContext";

export default function GamePage() {
  const game = useContext(gameContext);

  const nav = useNavigate();

  return (
    <MainBackground>
      <Box sx={{ ...flexBoxSx, flexDirection: "column" }}>
        <Box sx={mainBoxSx}>
          <FlipContainer
            active={game.gameOn && game.flip}
            main={true}
            containerSx={mainFlipContainerSx}
          />
        </Box>
        <Footer />
      </Box>
      <OverlayContainer />
      {/* <Header /> */}
    </MainBackground>
  );
}
