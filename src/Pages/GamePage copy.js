import React, { useState, useEffect, useContext } from "react";
import { delay } from "../Helpers/FunctionHelpers";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../CustomHooks";
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
import PostGameCard from "../Cards/PostGameCard";
import MainCardContainer from "../Helpers/ComponentHelpers/MainCardContainer";
import MainBackground from "../Helpers/ComponentHelpers/MainBackground";
import RulesCard from "../Cards/RulesCard";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [finishSpeech, setFinishSpeech] = useState("");
  const [timerValue, setTimerValue] = useState(5);
  const [gameOn, toggleGameOn] = useToggle(false);
  const [gameActive, toggleGame] = useToggle(true);
  const [timerActive, toggleTimer] = useToggle(false);
  // const [questionCardFlip, toggleQuestionCardFlip] = useToggle(false);
  const [btnFlip, toggleBtnFlip] = useToggle(false);
  const [mainCard, toggleMainCard] = useToggle(false);
  const [rulesCard, toggleRulesCard] = useToggle(false);
  const [seconds, setSeconds] = useState(timerValue);
  const nav = useNavigate();

  useEffect(() => {
    if (gameActive) {
      questionGenerator();
      // setTimeout(() => {
      //   toggleQuestionCardFlip();
      // }, 2000);
    }
  }, [gameActive]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     toggleReady();
  //   }, 1000);
  //   setTimeout(() => {
  //     toggleBtnFlip();
  //   }, 1500);
  // }, [gameActive, timerActive]);

  useEffect(() => {
    let interval = null;

    if (timerActive && gameActive) {
      if (seconds >= 1) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        setCompleteTurn(true);
      }
    }

    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const endRound = () => {
    toggleTimer();
    toggleGame();
  };

  const startSpeech = () => {
    toggleTimer();
  };

  const setCompleteTurn = result => {
    endRound();
    setFinishSpeech(result);
  };

  const nextRound = () => {
    toggleMainCard();
    setSeconds(timerValue);
    setTimeout(() => {
      toggleGame();
      toggleMainCard();
    }, 2500);
  };

  const toggleRules = () => {
    if (rulesCard && !mainCard) {
      toggleRulesCard();
      delay(toggleMainCard, 1550);
    } else if (!rulesCard && mainCard) {
      toggleMainCard();
      delay(toggleRulesCard, 1550);
    } else toggleRulesCard();
  };

  return (
    <MainBackground timerValue={timerValue} seconds={seconds}>
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
        <Button variant='contained' onClick={toggleRules}>
          {!rulesCard ? "show rules" : "hide rules"}
        </Button>
        <Button variant='contained' onClick={toggleRules}>
          {!rulesCard ? "PlayGame" : "QuitGame"}
        </Button>
        <MainCardContainer>
          <QuestionCard
            showCard={mainCard}
            gameActive={gameActive}
            seconds={seconds}
            finishSpeech={finishSpeech}
            currentQuestion={currentQuestion}
          />
          <RulesCard showCard={rulesCard} />
        </MainCardContainer>
      </Box>
      <Footer
        sx={{
          ...marginSx,
          justifyContent: "space-between",
          // background: "teal",
        }}
      >
        <Button
          variant='contained'
          color='primary'
          sx={{ height: "100%", width: "180px" }}
          onClick={startSpeech}
        >
          Start
        </Button>
        <Button
          variant='contained'
          color='primary'
          sx={{ height: "100%", width: "180px" }}
          onClick={() => setCompleteTurn(false)}
        >
          Fail
        </Button>
        <Button
          variant='contained'
          color='primary'
          sx={{ height: "100%", width: "180px" }}
          onClick={nextRound}
        >
          Next Round
        </Button>
      </Footer>
    </MainBackground>
  );
}
const Header = styled(Box)``;
const Footer = styled(Box)``;
