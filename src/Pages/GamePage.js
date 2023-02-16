import React, { useState, useEffect, useContext } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useNavigate } from "react-router-dom";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";

import {
  Sx,
  flexBoxSx,
  mainFlipContainerSx,
  cardOverlaySx,
  backgroundWordsOverlaySx,
  fabricOverlaySx,
  mainBoxSx,
} from "../Styles/SXstyles";
import styled from "styled-components";
import { Paper, Box, Button, useMediaQuery } from "@mui/material";
import Header from "../ComponentHelpers/Header";
import Footer from "../ComponentHelpers/Footer";
import MainBackground from "../ComponentHelpers/MainBackground";

import { MainFlipContainer } from "../ComponentHelpers/FlipContainer";
import OverlayContainer from "../ComponentHelpers/OverlayContainer";

import { gameContext } from "../Context/GameStatusContext";

export default function GamePage() {
  const game = useContext(gameContext);
  const maxHeight = useMediaQuery("(max-height: 280px)");

  maxHeight && console.log("hi");
  return (
    <MainBackground>
      <Box
        sx={{
          ...flexBoxSx,
          flexDirection: "column",
          // padding: Sx.padding.main,
          // gap: Sx.gap.main,
          // justifyContent: "space-between",
          justifyContent: Sx.justifyContent,
          gap: Sx.gap.main,
          // background: "teal",
          // padding: Sx.padding.main,
        }}
      >
        <Header />
        {/* height: maxHeight ? "140px" : "100%"  */}
        <Box sx={mainBoxSx}>
          <MainFlipContainer active={game.flip} />
        </Box>
        {/* <Box
          sx={{
            ...flexBoxSx,
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <Box
            sx={{
              ...flexBoxSx,
              background: "green",
              width: "50px",
              height: "40px",
            }}
          >
            <FlipContainer
              active={game.flip}
              containerSx={mainFlipContainerSx}
            />
          </Box>
          <Box sx={{ ...flexBoxSx, background: "teal" }}>
            <FlipContainer
              active={game.flip}
              main={true}
              containerSx={mainFlipContainerSx}
            />
          </Box>
          <Box
            sx={{
              ...flexBoxSx,
              background: "green",
              width: "50px",
              height: "40px",
            }}
          >
            <FlipContainer
              active={game.flip}
              containerSx={mainFlipContainerSx}
            />
          </Box>
        </Box> */}
        <Footer />
      </Box>
      <OverlayContainer />
    </MainBackground>
  );
}
