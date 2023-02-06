import React, { useState, useEffect, useContext } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useNavigate } from "react-router-dom";
import { useToggle, useDidMountEffect } from "../Helpers/CustomHooks";
import {
  GenerateQuestionProvider,
  QuestionProvider,
} from "../Context/GameContext";
import {
  pageSx,
  marginSx,
  backgroundPageSx,
  flexBoxSx,
  questionCardBoxSx,
  mainFlipContainerSx,
} from "../SXstyles";
import styled from "styled-components";
import { Paper, Box, Button } from "@mui/material";
import QuestionCard from "../BackCards/QuestionCard";

import MainBackground from "../ComponentHelpers/MainBackground";

import FlipContainer from "../ComponentHelpers/FlipContainer";

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
      <Button variant='contained' onClick={toggleFlip} sx={{ zIndex: 11 }}>
        {!flip ? "PlayGame" : "QuitGame"}
      </Button>
      <Box
        sx={{
          ...flexBoxSx,
          // alignItems: gameActive ? "flex-start" : "flex-end",
          position: "relative",
          gap: "1rem",
          cursor: "pointer",
          // zIndex: 5,

          // background: "red",
        }}
      >
        {/* <MainCardContainer>
          <QuestionCard
            showCard={mainCard}
            questionCard={questionCard}
            seconds={seconds}
            finishSpeech={false}
            currentQuestion={currentQuestion}
          />
          <RulesCard showCard={rulesCard} />
        </MainCardContainer> */}
        <FlipContainer
          flip={flip}
          mainContainer={true}
          containerSx={mainFlipContainerSx}
        >
          <QuestionCard seconds={seconds} currentQuestion={currentQuestion} />
        </FlipContainer>
      </Box>
      <Button variant='contained' onClick={toggleFlip} sx={{ zIndex: 11 }}>
        {!flip ? "PlayGame" : "QuitGame"}
      </Button>

      {/* <Button variant='contained' onClick={toggleRules}>
          {questionCard ? "show rules" : "hide rules"}
        </Button>
        <Button variant='contained' onClick={togglePowerButton}>
          {!gameActive ? "PlayGame" : "QuitGame"}
        </Button> */}
    </MainBackground>
  );
}
