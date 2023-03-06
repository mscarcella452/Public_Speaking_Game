import React, { useReducer, createContext, useContext, useEffect } from "react";
import { useInterval } from "../Helpers/CustomHooks";
import { generateTopicContext } from "./TopicContext";
import { timerContext, timerDispatchContext } from "./TimerContext";
import { buttonDispatchContext } from "./ButtonContext";

export const gameContext = createContext();
export const gameDispatchContext = createContext();

// export const intermisisonCountTrigger = 30;

// localStorage.removeItem("PublicSpeakingStorage");

const intialValue = {
  status: "off",
  flip: false,
  rules: false,
  thirdBtnTitle: "Play",
};

const gameReducer = (game, action) => {
  switch (action.type) {
    case "GAME_OFF":
      return {
        ...intialValue,
        // fullVersion: game.fullVersion,
        // intermissionCount: game.intermissionCount,
        thirdBtnTitle: "Play",
      };
    case "LOAD":
      return { ...game, flip: !game.flip };
    case "TOPIC_STATUS":
      // !game.fullVersion &&
      //   updateStorage({
      //     intermissionCount: game.intermissionCount + 1,
      //   });
      return {
        ...game,
        flip: true,
        status: "topic",
        // intermissionCount: !game.fullVersion ? game.intermissionCount + 1 : 0,
      };
    case "SPEECH_STATUS":
      return {
        ...game,
        status: "speech",
        thirdBtnTitle: "Next",
      };

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
        // intermissionCount: 0,
        thirdBtnTitle: "Upgrade",
      };
    case "TOGGLE_RULES":
      return {
        ...game,
        rules: !game.rules,
      };

    // case "BUY":
    //   // updateStorage({ fullVersion: true, intermissionCount: 0 });
    //   return {
    //     ...game,
    //     fullVersion: true,
    //     ...intialValue.intermission,
    //   };
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function GameStatusProvider({ children }) {
  const [game, gameDispatch] = useReducer(gameReducer, intialValue);
  // useEffect(() => {
  //   !game.fullVersion &&
  //     updateStorage({
  //       intermissionCount: game.intermissionCount + 1,
  //     });
  // }, [game.intermissionCount]);
  return (
    <gameDispatchContext.Provider value={gameDispatch}>
      <gameContext.Provider value={game}>{children}</gameContext.Provider>
    </gameDispatchContext.Provider>
  );
}

export default GameStatusProvider;
