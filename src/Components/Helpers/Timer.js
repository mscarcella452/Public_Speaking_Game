import { useState, useContext } from "react";
import { useInterval } from "../../Helpers/CustomHooks";
import { Textfit } from "react-textfit";
import { gameContext } from "../../Context/GameStatusContext";
import { timerContext, timerDispatchContext } from "../../Context/TimerContext";
import { flexBoxSx } from "../../Styles/SXstyles";

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

  return <>{`:${timer.seconds}`}</>;
}

export default Timer;
