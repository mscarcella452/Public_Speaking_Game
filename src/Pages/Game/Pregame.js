import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Pregame({ toggleGame, currentQuestion }) {
  const nav = useNavigate();
  // questionGenerator();
  return (
    <>
      <h1>Pregame</h1>
      <p>{currentQuestion}</p>
      <Button onClick={() => nav("/")}>Quit</Button>
      {/* <Button onClick={toggleTimer}>{timerActive ? "Pause" : "Start"}</Button> */}
      <Button onClick={toggleGame}>Start</Button>
    </>
  );
}
