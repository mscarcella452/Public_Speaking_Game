import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../CustomHooks";
import {
  GenerateQuestionProvider,
  QuestionProvider,
} from "../Context/GameContext";
import Game from "./Game/Game";
import Pregame from "./Game/Pregame";
import { pageSx, marginSx, backgroundPageSx, flexBoxSx } from "../SXstyles";
import styled from "styled-components";
import {
  Paper,
  Box,
  Slide,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import GameTimer from "../ComponentHelpers/GameTimer";
import backgroundWords from "../Images/backgroundWords.png";
import PublicSpeakingCropped from "../Images/PublicSpeakingCropped.png";
import QuestionCard from "../Cards/QuestionCard";
import ActionBtnCard from "../Cards/ActionBtnCard";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [failSpeech, setFailSpeech] = useState("");
  const [timerValue, setTimerValue] = useState(30);
  const [gameActive, toggleGame] = useToggle(true);
  const [gameStatus, setGameStatus] = useState("preGame");
  const [timerActive, toggleTimer] = useToggle(false);
  const [questionCardFlip, toggleQuestionCardFlip] = useToggle(false);
  const [btnFlip, toggleBtnFlip] = useToggle(false);
  const [ready, toggleReady] = useToggle(false);
  const [rules, toggleRules] = useToggle(false);
  const [seconds, setSeconds] = useState(timerValue);
  const nav = useNavigate();

  // nav("/PublicSpeaking");
  //  const startRound = () => {
  //    questionGenerator();
  //    setTimeout(() => {
  //      toggleQuestionCardFlip();
  //    }, 750);
  //  };
  console.log(ready);
  useEffect(() => {
    gameActive && questionGenerator();
    setTimeout(() => {
      toggleQuestionCardFlip();
    }, 1500);
  }, [gameActive]);

  useEffect(() => {
    setTimeout(() => {
      toggleReady();
    }, 1000);
    setTimeout(() => {
      toggleBtnFlip();
    }, 1500);
  }, [gameActive, timerActive]);

  useEffect(() => {
    let interval = null;

    if (timerActive && gameActive) {
      if (seconds >= 0) {
        interval = setInterval(() => {
          setSeconds(seconds => seconds - 1);
        }, 1000);
      } else {
        clearInterval(interval);
        completedSpeech();
        setSeconds(timerValue);
      }
    }

    return () => clearInterval(interval);
  }, [timerActive, seconds]);

  const endRound = () => {
    // toggleBtnFlip();
    toggleTimer();
    setSeconds(timerValue);
    toggleGame();
    // {
    //   flip &&
    //     setTimeout(() => {
    //       questionGenerator();
    //       toggleGame();
    //     }, 1000);
    // }
  };

  const startSpeech = () => {
    toggleTimer();
  };

  const failedSpeech = () => {
    endRound();
    setFailSpeech(true);
  };

  const viewTopic = () => {
    toggleQuestionCardFlip();
    toggleGame();
  };

  const completedSpeech = () => {
    endRound();
    setFailSpeech(false);
  };

  const handleActionBtn = e => {
    e.target.innerText === "Start Speech"
      ? startSpeech()
      : e.target.innerText === "View Topic"
      ? viewTopic()
      : failedSpeech();
    toggleReady();
    toggleBtnFlip();
  };

  return (
    <Paper sx={{ ...backgroundPageSx, gap: ".5rem" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          background: gameActive && "#981010",
          opacity: seconds / timerValue,
          zIndex: 0,
        }}
      />
      <Paper
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100%",
          width: "100%",
          zIndex: 0,
          background: `url(${backgroundWords}) no-repeat center`,
          backgroundSize: "cover",
        }}
      />

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
        <QuestionCard
          active={gameActive && !rules}
          seconds={seconds}
          flip={questionCardFlip}
          currentQuestion={currentQuestion}
        />
      </Box>
      <Footer
        sx={{
          ...marginSx,
          justifyContent: "space-between",
          height: "100px",
          // background: "teal",
        }}
      >
        <ActionBtnCard
          handleClick={handleActionBtn}
          active={ready && gameActive && !timerActive}
          btnFlip={btnFlip}
        >
          Start Speech
        </ActionBtnCard>

        <ActionBtnCard
          handleClick={handleActionBtn}
          active={ready && gameActive && timerActive}
          btnFlip={btnFlip}
        >
          Fail Speech
        </ActionBtnCard>

        <ActionBtnCard
          handleClick={handleActionBtn}
          active={ready && !gameActive}
          btnFlip={btnFlip}
        >
          View Topic
        </ActionBtnCard>
        {/* <Paper
          sx={{
            ...flexBoxSx,
            maxHeight: "100%",
            width: "180px",
            padding: ".5rem",
            position: "relative",
            cursor: "pointer",
          }}
        >
          <Box
            onClick={gameActive && !timerActive && toggleTimer}
            sx={{
              ...flexBoxSx,
              height: "100%",
              width: "100%",
              background:
                !(gameActive && !timerActive) &&
                `url(${PublicSpeakingCropped}) no-repeat center`,
              backgroundSize: "contain",
            }}
          >
            {gameActive && !timerActive && "Start Speech"}
          </Box>
        </Paper> */}
      </Footer>
    </Paper>
  );
}
const Header = styled(Box)``;
const Footer = styled(Box)``;
