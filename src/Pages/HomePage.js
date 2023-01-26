import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { GenerateQuestionProvider } from "../Context/GameContext";

export default function HomePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const nav = useNavigate();

  const startGame = () => {
    questionGenerator();
    nav("/Play");
  };
  return (
    <>
      <div>Public Speaking App</div>
      <Button onClick={startGame}>Play</Button>
      <Button onClick={() => nav("/Rules")}>Rules</Button>
    </>
  );
}
