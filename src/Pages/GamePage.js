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
import FlipCard from "../Cards/FlipCard";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [failSpeech, setFailSpeech] = useState("");
  const [timerValue, setTimerValue] = useState(30);
  const [gameActive, toggleGame] = useToggle(true);
  const [timerActive, toggleTimer] = useToggle(false);
  const [flip, toggleFlip] = useToggle(false);
  const [seconds, setSeconds] = useState(timerValue);
  const nav = useNavigate();

  useEffect(() => {
    !flip &&
      setTimeout(() => {
        toggleFlip();
      }, 750);
  }, [gameActive]);

  // useEffect(() => {
  //   let interval = null;

  //   if (timerActive && gameActive) {
  //     if (seconds >= 0) {
  //       interval = setInterval(() => {
  //         setSeconds(seconds => seconds - 1);
  //       }, 1000);
  //     } else {
  //       clearInterval(interval);
  //       completedSpeech();
  //       setSeconds(timerValue);
  //     }
  //   }

  //   return () => clearInterval(interval);
  // }, [timerActive, seconds]);

  const endRound = () => {
    setSeconds(timerValue);
    toggleFlip();
    {
      flip &&
        setTimeout(() => {
          questionGenerator();
          toggleGame();
        }, 1000);
    }
  };

  const failedSpeech = () => {
    endRound();
    setFailSpeech(true);
    toggleTimer();
  };
  const completedSpeech = () => {
    endRound();
    setFailSpeech(false);
    toggleTimer();
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
      <Header
        sx={{
          ...marginSx,
          justifyContent: "space-between",
          height: "100px",
        }}
      >
        <Paper
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
        </Paper>
        {gameActive && (
          <Paper
            sx={{
              ...flexBoxSx,
              background: "black",
              color: "#fff",
              width: "90px",
              padding: ".75rem",
              fontSize: "2.5rem",
              fontWeight: "bold",
              borderRadius: "50%",
            }}
          >
            {`:${seconds}`}
          </Paper>
        )}
        {/* <IconButton onClick={() => nav("/")}>
          <DisabledByDefaultIcon />
        </IconButton>
         {!timerActive && <Typography>Timer: 90 seconds</Typography>}
        <p>{seconds}</p> */}
      </Header>
      <Box
        sx={{
          ...flexBoxSx,
          // alignItems: gameActive ? "flex-start" : "flex-end",
          position: "relative",
          gap: "1rem",
          cursor: "pointer",
          zIndex: 5,
        }}
      >
        <IconButton onClick={failedSpeech}>hi</IconButton>
        {/* <Paper
          sx={{
            ...flexBoxSx,
            position: gameActive && "absolute",
            left: gameActive && 0,
            height: !gameActive ? "auto" : "100%",
            width: gameActive ? "60px" : "500px",
            transition: "width ease-in .5s",
            borderRadius: "20px",
          }}
          onClick={failedSpeech}
        >
          {!gameActive && <p>{failSpeech ? "You failed" : "Congrats"}</p>}
        </Paper> */}

        <QuestionCard
          gameActive={gameActive}
          toggleGame={toggleGame}
          seconds={seconds}
          flip={flip}
        />

        {/* {!gameActive ? (
          <Pregame
            toggleGame={toggleGame}
            currentQuestion={currentQuestion}
            failSpeech={failSpeech}
          />
        ) : (
          <Game
            failedSpeech={failedSpeech}
            completedSpeech={completedSpeech}
            currentQuestion={currentQuestion}
            timerActive={timerActive}
            toggleTimer={toggleTimer}
          />
        )} */}
      </Box>
      {/* <Footer sx={marginSx}>
        <Typography>Public Speaking</Typography>
      </Footer> */}
    </Paper>
  );
}
const Header = styled(Box)``;
const Footer = styled(Box)``;
