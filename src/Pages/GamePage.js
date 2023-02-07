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
import BottomBtnContainer from "../ComponentHelpers/BottomBtnContainer";
import MainBackground from "../ComponentHelpers/MainBackground";

import FlipContainer from "../ComponentHelpers/FlipContainer";
import FlipContainerOverlay from "../ComponentHelpers/FlipContainerOverlay";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [timerValue, setTimerValue] = useState(5);
  const [seconds, setSeconds] = useState(timerValue);
  const [gameStatus, setGameStatus] = useState("pause");
  const [timerActive, toggleTimer] = useToggle(false);
  const [gameActive, toggleGame] = useToggle(false);

  // const [mainCard, toggleMainCard] = useToggle(false);
  // const [rulesCard, toggleRulesCard] = useToggle(false);
  // const [questionCard, toggleQuestionCard] = useToggle(true);
  // const [flip, toggleFlip] = useToggle(false);

  const nav = useNavigate();

  // const toggleFlip = () => setFlip(prevFlip => !prevFlip);

  useEffect(() => {
    let interval = null;

    if (timerActive) {
      if (seconds >= 0) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        // completedSpeech();
        endRound();
      }
    }
    // console.log(`${(seconds / initialValue) * 100}px`);

    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const togglePowerButton = () => {
    !gameActive && questionGenerator();
    seconds !== timerValue && setSeconds(timerValue);
    timerActive && toggleTimer();
    // !questionCard && toggleQuestionCard();
    toggleGame();
    setGameStatus("topic");
    // toggleMainCard();
  };

  const startTimer = () => {
    setGameStatus("speech");
    toggleTimer();
  };

  const endRound = () => {
    setGameStatus("pause");
    setTimeout(() => {
      setGameStatus("result");
    }, 1500);
    toggleTimer();
  };
  const nextRound = () => {
    setGameStatus("pause");
    setTimeout(() => {
      setGameStatus("topic");
      setSeconds(timerValue);
      questionGenerator();
    }, 1500);
  };

  // const toggleRules = () => {
  //   if (gameActive) {
  //     if (mainCard) {
  //       toggleMainCard();
  //       delay(toggleRulesCard, 1500);
  //     } else {
  //       toggleRulesCard();
  //       delay(toggleMainCard, 1500);
  //     }
  //   } else toggleRulesCard();
  // };

  return (
    <MainBackground timerValue={timerValue} seconds={seconds}>
      <Box sx={{ ...flexBoxSx, flexDirection: "column" }}>
        <Box sx={mainBoxSx}>
          <FlipContainer
            active={gameActive && gameStatus !== "pause"}
            main={true}
            containerSx={mainFlipContainerSx}
          />
        </Box>
        <Footer gameActive={gameActive} timerActive={timerActive} />
      </Box>
      <Box sx={overlayContainerSx}>
        <Button
          onClick={togglePowerButton}
          sx={{ zIndex: 20, position: "absolute", top: 0 }}
        >
          Turn Off
        </Button>
        <Box sx={mainBoxSx}>
          <FlipContainerOverlay
            active={gameActive && gameStatus !== "pause"}
            main={true}
            gameStatus={gameStatus}
            containerSx={mainFlipContainerSx}
          >
            <QuestionCard
              seconds={seconds}
              currentQuestion={currentQuestion}
              gameStatus={gameStatus}
            />
          </FlipContainerOverlay>
        </Box>
        <BottomBtnContainer
          gameActive={gameActive}
          gameStatus={gameStatus}
          togglePowerButton={togglePowerButton}
          startTimer={startTimer}
          endRound={endRound}
          nextRound={nextRound}
        />
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
