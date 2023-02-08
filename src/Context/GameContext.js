import React, { createContext } from "react";
import { useToggle } from "../Helpers/CustomHooks";
import GameStatusProvider from "./GameStatusContext";
import TopicContextProvider from "./TopicContext";
import TimerContextProvider from "./TimerContext";

// export const gameActiveContext = createContext();
// export const toggleGameContext = createContext();

function GameContext({ children }) {
  // const [gameActive, toggleGame] = useToggle(false);

  return (
    <TimerContextProvider>
      <TopicContextProvider>
        <GameStatusProvider>
          {children}
          {/* <toggleGameContext.Provider value={toggleGame}>
            <gameActiveContext.Provider value={gameActive}>
              {children}
            </gameActiveContext.Provider>
          </toggleGameContext.Provider> */}
        </GameStatusProvider>
      </TopicContextProvider>
    </TimerContextProvider>
  );
}

export default GameContext;

// const [usedIndex, setUsedIndex] = useState([]);
// const [currentQuestion, setCurrentQuestion] = useState("");

// const questionGenerator = () => {
//   let filteredQuestions = questions.filter(
//     (question, index) => !usedIndex.includes(index)
//   );

//   const randomIndex = Math.floor(Math.random() * filteredQuestions.length);
//   setCurrentQuestion(filteredQuestions[randomIndex]);

//   filteredQuestions.length > 1
//     ? questions.map(
//         (question, index) =>
//           question === filteredQuestions[randomIndex] &&
//           setUsedIndex([...usedIndex, index])
//       )
//     : setUsedIndex([]);
// };
