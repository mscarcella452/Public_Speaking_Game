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
} from "../SXstyles";
import styled from "styled-components";
import { Paper, Box, Button } from "@mui/material";
import QuestionCard from "../Cards/QuestionCard";
import ActionBtnCard from "../Cards/ActionBtnCard";
import MainCardContainer from "../Helpers/ComponentHelpers/MainCardContainer";
import MainBackground from "../Helpers/ComponentHelpers/MainBackground";
import RulesCard from "../Cards/RulesCard";
import Header from "../Helpers/ComponentHelpers/Header";
import Footer from "../Helpers/ComponentHelpers/Footer";

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
      <Header toggleRules={toggleRules} togglePowerButton={togglePowerButton} />
      <Box
        sx={{
          ...flexBoxSx,
          // alignItems: gameActive ? "flex-start" : "flex-end",
          position: "relative",
          gap: "1rem",
          cursor: "pointer",
          zIndex: 5,
          // background: "red",
        }}
      >
        <MainCardContainer>
          <QuestionCard
            showCard={mainCard}
            questionCard={questionCard}
            seconds={seconds}
            finishSpeech={false}
            currentQuestion={currentQuestion}
          />
          <RulesCard showCard={rulesCard} />
        </MainCardContainer>
      </Box>

      {/* <Button variant='contained' onClick={toggleRules}>
          {questionCard ? "show rules" : "hide rules"}
        </Button>
        <Button variant='contained' onClick={togglePowerButton}>
          {!gameActive ? "PlayGame" : "QuitGame"}
        </Button> */}
      <Footer
        gameActve={gameActive}
        mainCard={mainCard}
        togglePowerButton={togglePowerButton}
      />
    </MainBackground>
  );
}
