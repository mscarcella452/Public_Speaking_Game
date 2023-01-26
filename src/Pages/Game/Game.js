import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Game({
  currentQuestion,
  timerActive,
  toggleTimer,
  endRound,
}) {
  const nav = useNavigate();
  return (
    <>
      <h1>Game</h1>
      <h4>Topic</h4>
      <p>{currentQuestion}</p>
      <Button onClick={() => nav("/")}>Quit</Button>
      <Button onClick={toggleTimer}>{timerActive ? "Pause" : "Start"}</Button>
      <Button onClick={endRound}>Failed Speech</Button>
      {/* <GameTimer isActive={timerActive} toggleActive={toggleTimer} /> */}
    </>
  );
}
