import React, { useState, useContext } from "react";
import { useToggle } from "../CustomHooks";
import {
  GenerateQuestionProvider,
  QuestionProvider,
} from "../Context/GameContext";
import Game from "./Game/Game";
import Pregame from "./Game/Pregame";

export default function GamePage() {
  const questionGenerator = useContext(GenerateQuestionProvider);
  const currentQuestion = useContext(QuestionProvider);
  const [timerActive, toggleTimer] = useToggle(false);
  const [gameActive, toggleGame] = useToggle(false);

  const endRound = () => {
    questionGenerator();
    toggleGame();
  };

  return (
    <>
      {!gameActive ? (
        <Pregame toggleGame={toggleGame} currentQuestion={currentQuestion} />
      ) : (
        <Game
          endRound={endRound}
          currentQuestion={currentQuestion}
          timerActive={timerActive}
          toggleTimer={toggleTimer}
        />
      )}
    </>
  );
}
