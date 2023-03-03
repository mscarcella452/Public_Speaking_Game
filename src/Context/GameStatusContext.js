import React, { useReducer, createContext, useContext, useEffect } from "react";
import { useInterval } from "../Helpers/CustomHooks";
import { generateTopicContext } from "./TopicContext";
import { timerContext, timerDispatchContext } from "./TimerContext";
import { buttonDispatchContext } from "./ButtonContext";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

export const intermisisonCountTrigger = 2;

const intialValue = {
  status: "off",
  flip: false,
  fullVersion: false,
  rules: false,
  questionCount: 0,
  thirdBtnTitle: "Play",
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "GAME_OFF":
      return {
        ...intialValue,
        fullVersion: game.fullVersion,
        questionCount: game.questionCount,
        thirdBtnTitle: "Play",
      };
    case "LOAD":
      return { ...game, flip: !game.flip };
    case "TOPIC_STATUS":
      return {
        ...game,
        flip: true,
        status: "topic",
        questionCount: !game.fullVersion ? game.questionCount + 1 : 0,
      };
    case "SPEECH_STATUS":
      return {
        ...game,
        status: "speech",
        thirdBtnTitle: "Next",
      };
    // case "FAIL_STATUS":
    //   return {
    //     ...game,
    //     failSpeech: true,
    //     flip: true,
    //     status: "result",
    //   };
    // case "SUCCESS_STATUS":
    //   return {
    //     ...game,
    //     failSpeech: false,
    //     flip: true,
    //     status: "result",
    //   };
    case "RESULT_STATUS":
      return {
        ...game,
        flip: true,
        status: "result",
      };
    case "INTERMISSION_STATUS":
      return {
        ...game,
        status: "intermission",
        flip: true,
        questionCount: 0,
        thirdBtnTitle: "Upgrade",
      };
    case "TOGGLE_RULES":
      return {
        ...game,
        rules: !game.rules,
      };
    // case "INTERMISSION_OFF":
    //   return {
    //     ...game,
    //     intermission: {
    //       ...game.intermission,
    //       On: false,
    //     },
    //   };
    case "BUY":
      return {
        ...game,
        fullVersion: true,
        ...intialValue.intermission,
      };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function GameStatusProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, intialValue);
  const topicGenerator = useContext(generateTopicContext);

  const btnDispatch = useContext(buttonDispatchContext);

  // useInterval(() => {
  //   if (!game.timer.On) return;
  //   gameDispatch({
  //     type: "SET_SECONDS",
  //     payload: game.timer.seconds === 0 ? 0 : game.timer.seconds - 1,
  //   });
  // }, 1000);

  // useEffect(() => {
  //   if (game.status === "off") {
  //     setTimeout(() => {
  //       btnDisptch({ type: "TOGGLE_RULES_BTN" });
  //       btnDisptch({ type: "TOGGLE_PLAY_BTN" });
  //     }, 200);
  //   }
  // }, [game.status]);

  // useEffect(() => {
  //   !game.intermission.On &&
  //     game.status === "intermission" &&
  //     btnDisptch({ type: "TOGGLE_QUIT_BTN" });
  // }, [game.intermission.On]);

  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameStatusProvider;
