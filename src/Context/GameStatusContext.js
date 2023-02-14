import React, { useReducer, createContext, useContext, useEffect } from "react";
import { generateTopicContext } from "./TopicContext";
import { timerContext, timerDispatchContext } from "./TimerContext";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

const intialValue = {
  status: "off",
  // On: false,
  flip: false,
  fullVersion: false,
  failSpeech: false,
  rules: false,
  intermission: false,
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "GAME_OFF":
      return { ...intialValue, fullVersion: game.fullVersion };
    case "GAME_ON":
      return { ...game, flip: true, status: "topic" };
    case "LOAD":
      return { ...game, flip: !game.flip };
    case "TOPIC":
      return { ...game, flip: true, status: "topic" };
    case "SPEECH":
      return { ...game, status: "speech" };
    case "FAIL":
      return { ...game, failSpeech: true, flip: true, status: "result" };
    case "SUCCESS":
      return { ...game, failSpeech: false, flip: true, status: "result" };
    case "TOGGLE_RULES":
      return { ...game, rules: !game.rules };
    case "TOGGLE_INTERMISSION":
      return { ...game, intermission: !game.intermission };
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

  const completedSpeech = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "SUCCESS" });
      timerDispatch({ type: "TOGGLE_TIMER" });
    }, 1200);
  };

  useEffect(() => {
    timer.seconds === 0 && completedSpeech();
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
