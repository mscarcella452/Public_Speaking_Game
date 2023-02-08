import React, { createContext, useReducer } from "react";
import { useInterval } from "../Helpers/CustomHooks";

export const timerContext = createContext();
export const timerDispatchContext = createContext();

const initialTimerValue = {
  startingValue: 5,
  seconds: 5,
  timerOn: false,
};

const TimerReducer = (timer, action) => {
  switch (action.type) {
    case "SET_SECONDS":
      return {
        ...timer,
        seconds: action.payload,
      };

    case "RESET":
      return initialTimerValue;

    case "TOGGLE_TIMER":
      return { ...timer, timerOn: !timer.timerOn };

    case "SET_STARTING_VALUE":
      return { ...timer, startingValue: action.payload };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function TimerContextProvider({ children }) {
  const [timer, timerDispatch] = useReducer(TimerReducer, initialTimerValue);

  // let interval = null;

  // if (timer.timerOn) {
  //   if (timer.seconds >= 0) {
  //     interval = useInterval(() => {
  //       seconds - 1;
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }
  // }

  // timer.timerOn && timer.seconds >= 0
  //   ? (interval = useInterval(() => {
  //       timer.seconds - 1;
  //     }, 1000))
  //   : clearInterval(interval);

  useInterval(() => {
    if (!timer.timerOn) return;
    timerDispatch({
      type: "SET_SECONDS",
      payload: timer.seconds === 0 ? 0 : timer.seconds - 1,
    });
  }, 1000);

  return (
    <timerContext.Provider value={timer}>
      <timerDispatchContext.Provider value={timerDispatch}>
        {children}
      </timerDispatchContext.Provider>
    </timerContext.Provider>
  );
}

export default TimerContextProvider;