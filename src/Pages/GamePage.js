import React, { useState, useEffect, useContext } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useNavigate } from "react-router-dom";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";
import {
  GenerateQuestionProvider,
  QuestionProvider,
} from "../Context/GameContext";
import {
  flexBoxSx,
  mainFlipContainerSx,
  cardOverlaySx,
  backgroundWordsOverlaySx,
} from "../SXstyles";
import styled from "styled-components";
import { Paper, Box, Button } from "@mui/material";
import QuestionCard from "../BackFlip/QuestionCard";
import Header from "../ComponentHelpers/Header";
import Footer from "../ComponentHelpers/Footer";
import FooterOverlay from "../ComponentHelpers/FooterOverlay";
import MainBackground from "../ComponentHelpers/MainBackground";

import FlipContainer from "../ComponentHelpers/FlipContainer";
import FlipContainerOverlay from "../ComponentHelpers/FlipContainerOverlay";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [timerValue, setTimerValue] = useState(5);
  const [seconds, setSeconds] = useState(timerValue);
  // const [timerActive, toggleTimer] = useToggle(false);
  const [gameActive, toggleGame] = useToggle(false);
  const [mainCard, toggleMainCard] = useToggle(false);
  const [rulesCard, toggleRulesCard] = useToggle(false);
  const [questionCard, toggleQuestionCard] = useToggle(true);
  const [flip, toggleFlip] = useToggle(false);

  const nav = useNavigate();
  console.log(gameActive);
  const togglePowerButton = () => {
    !gameActive && questionGenerator();
    !questionCard && toggleQuestionCard();
    toggleGame();
    toggleMainCard();
  };
  const toggleRules = () => {
    if (gameActive) {
      if (mainCard) {
        toggleMainCard();
        delay(toggleRulesCard, 1500);
      } else {
        toggleRulesCard();
        delay(toggleMainCard, 1500);
      }
    } else toggleRulesCard();
  };

  return (
    <MainBackground timerValue={timerValue} seconds={seconds}>
      <Box sx={{ ...flexBoxSx, flexDirection: "column" }}>
        <Box sx={mainBoxSx}>
          <FlipContainer
            flip={flip}
            main={true}
            containerSx={mainFlipContainerSx}
          />
        </Box>
        <Footer flip={flip} />
      </Box>
      <Box sx={overlayContainerSx}>
        <Box sx={mainBoxSx}>
          <FlipContainerOverlay
            flip={flip}
            main={true}
            containerSx={mainFlipContainerSx}
          >
            <QuestionCard seconds={seconds} currentQuestion={currentQuestion} />
          </FlipContainerOverlay>
        </Box>
        <FooterOverlay toggleFlip={toggleFlip} flip={flip} />
      </Box>
      {/* <Header /> */}
    </MainBackground>
  );
}

const mainBoxSx = {
  ...flexBoxSx,
  position: "relative",
};

const overlayContainerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  zIndex: 20,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "2rem",
};
