import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToggle } from "../CustomHooks";
import { Button } from "@mui/material";
import GameTimer from "../ComponentHelpers/GameTimer";
import { questions } from "../Questions/Questions";

export default function GamePage() {
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [timerActive, toggleTimer] = useToggle(false);
  const nav = useNavigate();

  const questionGenerator = () => {
    let filteredQuestions = questions.filter(
      (question, index) => !usedIndex.includes(index)
    );

    const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    setCurrentQuestion(filteredQuestions[randomIndex]);

    filteredQuestions.length > 1
      ? questions.map(
          (question, index) =>
            question === filteredQuestions[randomIndex] &&
            setUsedIndex([...usedIndex, index])
        )
      : setUsedIndex([]);
  };

  return (
    <>
      <h1>GamePage</h1>
      <h4>Topic</h4>
      <p>{currentQuestion}</p>
      <Button onClick={() => nav("/")}>Quit</Button>
      <Button onClick={toggleTimer}>{timerActive ? "Pause" : "Start"}</Button>
      <Button onClick={questionGenerator}>random question</Button>
      <GameTimer isActive={timerActive} toggleActive={toggleTimer} />
    </>
  );
}
