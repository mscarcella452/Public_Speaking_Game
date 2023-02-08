import React, { useReducer, createContext, useContext, useEffect } from "react";
import { generateTopicContext } from "./TopicContext";
import { timerContext, timerDispatchContext } from "./TimerContext";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

const intialValue = {
  status: "topic",
  gameOn: false,
  flip: false,
  fullVersion: false,
  failSpeech: false,
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "TOGGLE_POWER":
      return {
        ...game,
        flip: !game.flip,
        gameOn: !game.gameOn,
        // status: !game.gameOn && "topic",
      };
    case "LOAD":
      return { ...game, flip: !game.flip };
    case "TOPIC":
      return { ...game, status: "topic" };
    case "SPEECH":
      return { ...game, status: "speech" };
    case "FAIL":
      return { ...game, failSpeech: true, status: "result" };
    case "SUCCESS":
      return { ...game, failSpeech: true, status: "result" };
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
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);

  useEffect(() => {
    if (game.gameOn) {
      // gameDispatch({ type: "topic" });
      topicGenerator();
    }
  }, [game.gameOn]);

  const endRound = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "SUCCESS" });
      gameDispatch({ type: "LOAD" });
    }, 1200);
    timerDispatch({ type: "TOGGLE_TIMER" });
  };

  useEffect(() => {
    timer.seconds === 0 && endRound();
    // if (timer.seconds === 0) {
    //   gameDispatch({ type: "LOAD" });
    //   setTimeout(() => {
    //     gameDispatch({ type: "SUCCESS" });
    //     gameDispatch({ type: "LOAD" });
    //   }, 1200);
    //   timerDispatch({ type: "TOGGLE_TIMER" });
    // }
  }, [timer.seconds]);

  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameStatusProvider;
