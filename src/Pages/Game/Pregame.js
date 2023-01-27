import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function Pregame({ toggleGame, failSpeech }) {
  const nav = useNavigate();
  // questionGenerator();
  return (
    <>
      <h1>Pregame</h1>
      <p>{failSpeech ? "You failed" : "Congrats"}</p>
      <p>Next Player</p>
      <Button onClick={() => nav("/")}>Quit</Button>
      <Button onClick={toggleGame}>Next Round</Button>
    </>
  );
}
