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
import { timerContext } from "../Context/TimerContext";

export default function GamePage() {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const [quitBtn, toggleQuitBtn] = useToggle(false);
  const [rulesBtnActive, toggleRulesBtnActive] = useToggle(false);
  const [playBtnActive, togglePlayBtnActive] = useToggle(false);

  // const nav = useNavigate();

  useEffect(() => {
    if (game.status === "off") {
      setTimeout(() => {
        toggleRulesBtnActive();
        togglePlayBtnActive();
      }, 200);
    }
  }, [game.status]);

  return (
    <MainBackground>
      <Box
        sx={{
          ...flexBoxSx,
          flexDirection: "column",
          padding: "1.5rem 2rem",
          gap: "3rem",
          justifyContent: "flex-start",
        }}
      >
        <Header quitBtn={quitBtn} rulesBtnActive={rulesBtnActive} />
        <Box sx={mainBoxSx}>
          <FlipContainer
            active={game.flip}
            main={true}
            containerSx={mainFlipContainerSx}
          />
        </Box>
        <Footer playBtnActive={playBtnActive} />
      </Box>
      <OverlayContainer
        toggleQuitBtn={toggleQuitBtn}
        quitBtn={quitBtn}
        rulesBtnActive={rulesBtnActive}
        toggleRulesBtnActive={toggleRulesBtnActive}
        playBtnActive={playBtnActive}
        togglePlayBtnActive={togglePlayBtnActive}
      />

      {/* <Header /> */}
    </MainBackground>
  );
}
