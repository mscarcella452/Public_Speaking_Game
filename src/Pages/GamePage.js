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
  const [failSpeech, setFailSpeech] = useState("");
  const [gameActive, toggleGame] = useToggle(true);

  const endRound = () => {
    questionGenerator();
    toggleGame();
  };

  const failedSpeech = () => {
    endRound();
    setFailSpeech(true);
  };
  const completedSpeech = () => {
    endRound();
    setFailSpeech(false);
  };

  return (
    <>
      {!gameActive ? (
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
        />
      )}
    </>
  );
}
