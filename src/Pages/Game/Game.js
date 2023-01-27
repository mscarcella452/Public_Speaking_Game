import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../../CustomHooks";
import { Button } from "@mui/material";
import GameTimer from "../../ComponentHelpers/GameTimer";

export default function Game({
  currentQuestion,
  failedSpeech,
  completedSpeech,
}) {
  const [timerActive, toggleTimer] = useToggle(false);
  const nav = useNavigate();

  return (
    <>
      <h1>Game</h1>
      <h4>Topic</h4>
      <p>{currentQuestion}</p>
      <Button onClick={() => nav("/")}>Quit</Button>
      {!timerActive ? (
        <Button onClick={toggleTimer}>Start</Button>
      ) : (
        <>
          <Button onClick={failedSpeech}>Failed Speech</Button>
          <GameTimer
            isActive={timerActive}
            initialValue={5}
            completedSpeech={completedSpeech}
          />
        </>
      )}
    </>
  );
}
