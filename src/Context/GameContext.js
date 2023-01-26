import React, { useState, createContext } from "react";
import { questions } from "../Questions/Questions";

export const QuestionProvider = createContext();
export const GenerateQuestionProvider = createContext();

function GameContext({ children }) {
  const [usedIndex, setUsedIndex] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");

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
    <GenerateQuestionProvider.Provider value={questionGenerator}>
      <QuestionProvider.Provider value={currentQuestion}>
        {children}
      </QuestionProvider.Provider>
    </GenerateQuestionProvider.Provider>
  );
}

export default GameContext;
