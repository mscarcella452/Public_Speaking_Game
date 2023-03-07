import React, { useReducer, createContext, useContext, useEffect } from "react";
import { gameContext } from "./GameStatusContext";

export const activeContext = createContext();
export const buttonContext = createContext();
export const buttonDispatchContext = createContext();

const intialBtnValue = {
  quitBtnActive: false,
  rulesBtnActive: false,
  playBtnActive: false,
  thirdBtnTitle: "Play",
};

const btnReducer = (btn, action) => {
  switch (action.type) {
    case "TOGGLE_QUIT_BTN":
      return { ...btn, quitBtnActive: !btn.quitBtnActive };
    case "TOGGLE_RULES_BTN":
      return { ...btn, rulesBtnActive: !btn.rulesBtnActive };
    case "TOGGLE_TOP_BTNS":
      return {
        ...btn,
        rulesBtnActive: !btn.rulesBtnActive,
        quitBtnActive: !btn.quitBtnActive,
      };
    case "TOGGLE_PLAY_BTN":
      return { ...btn, playBtnActive: !btn.playBtnActive };
    case "THIRD_BTN_TITLE":
      return { ...btn, thirdBtnTitle: action.payload };
    // setTimeout(() => {
    //   // return { ...btn, thirdBtnTitle: action.payload };
    //   return { ...btn, thirdBtnTitle: "boob" };
    // }, 500);

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function ButtonContextProvider({ children }) {
  const [btn, btnDisptch] = useReducer(btnReducer, intialBtnValue);
  const game = useContext(gameContext);

  useEffect(() => {
    if (game.status === "off") {
      setTimeout(() => {
        btnDisptch({ type: "TOGGLE_RULES_BTN" });
        btnDisptch({ type: "TOGGLE_PLAY_BTN" });
      }, 200);
    }
  }, [game.status]);

  const active = {
    main: {
      container: game.flip,
      gameCard: !game.rules && game.status !== "intermission",
      rulesCard: game.rules,
      intermissionCard: !game.rules && game.status === "intermission",
    },
    top: {
      quitBtn: !game.rules && btn.quitBtnActive,
      rulesBtn: btn.rulesBtnActive,
    },
    bottom: {
      leftBtn: game.flip && game.status === "topic" && !game.rules,
      middleBtn: game.flip && game.status === "speech" && !game.rules,
      rightBtn:
        (!game.rules && btn.playBtnActive) ||
        (game.status === "result" && game.flip) ||
        (game.status === "intermission" && game.flip),
    },
    timer: {
      speech: game.status === "speech",
      intermission: game.status === "intermission",
    },
  };

  return (
    <activeContext.Provider value={active}>
      <buttonDispatchContext.Provider value={btnDisptch}>
        <buttonContext.Provider value={btn}>{children}</buttonContext.Provider>
      </buttonDispatchContext.Provider>
    </activeContext.Provider>
  );
}

export default ButtonContextProvider;
