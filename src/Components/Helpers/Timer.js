import { useState, useContext } from "react";
import { useInterval } from "../../Helpers/CustomHooks";
import { gameContext } from "../../Context/GameStatusContext";
import { timerContext, timerDispatchContext } from "../../Context/TimerContext";

function Timer({ active, expire }) {
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);

  const timerOff = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    expire();
  };
  useInterval(() => {
    if (!active) return;
    if (timer.On) {
      timer.seconds === 0 ? timerOff() : timerDispatch({ type: "SET_SECONDS" });
    }
  }, 1000);

  return <div>{`:${timer.seconds}`}</div>;
}

export default Timer;
