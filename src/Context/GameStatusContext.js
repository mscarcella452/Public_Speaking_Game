import React, { useReducer, createContext, useContext, useEffect } from "react";
import { generateTopicContext } from "./TopicContext";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

const intialValue = {
  status: "topic",
  gameOn: false,
  flip: false,
  fullVersion: false,
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "TOGGLE_POWER":
      return {
        ...game,
        flip: !game.flip,
        gameOn: !game.gameOn,
        status: !game.gameOn && "topic",
      };
    case "LOAD":
      return { ...game, flip: !game.flip };
    case "TOPIC":
      return { ...game, status: "topic" };
    case "SPEECH":
      return { ...game, status: "speech" };
    case "RESULT":
      return { ...game, status: "result" };
    case "INTERMISSION":
      return { ...game, status: "intermission" };
    case "BUY":
      return { ...game, fullVersion: true };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function GameStatusProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, intialValue);
  const topicGenerator = useContext(generateTopicContext);

  useEffect(() => {
    if (game.gameOn) {
      // gameDispatch({ type: "topic" });
      topicGenerator();
    }
  }, [game.gameOn]);

  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameStatusProvider;
