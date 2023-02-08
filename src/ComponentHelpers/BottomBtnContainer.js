import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";

export default function BottomBtnContainer({
  togglePowerButton,
  timerDispatch,
  topicGenerator,
}) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);

  const startTimer = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    gameDispatch({ type: "SPEECH" });
  };

  const endRound = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "RESULT" });
      gameDispatch({ type: "LOAD" });
    }, 1500);
    timerDispatch({ type: "TOGGLE_TIMER" });
  };

  const failSpeech = () => {
    endRound();
    // setFailSpeech
  };

  const nextRound = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "TOPIC" });
      gameDispatch({ type: "LOAD" });
      timerDispatch({ type: "RESET" });
      topicGenerator();
    }, 1500);
    timerDispatch({ type: "TOGGLE_TIMER" });
  };

  return (
    <Box sx={marginSx}>
      <FlipContainer
        active={game.gameOn && game.flip && game.status === "topic"}
        containerSx={smallFlipContainerSx}
        overlay={true}
      >
        <Button onClick={startTimer} sx={btnSx}>
          Start Timer
        </Button>
      </FlipContainer>
      <FlipContainer
        active={game.gameOn && game.flip && game.status === "speech"}
        containerSx={smallFlipContainerSx}
        overlay={true}
      >
        <Button onClick={failSpeech} sx={btnSx}>
          Fail Speech
        </Button>
      </FlipContainer>
      <FlipContainer
        active={!game.gameOn || (game.flip && game.status === "result")}
        containerSx={smallFlipContainerSx}
        overlay={true}
      >
        <Button
          onClick={!game.gameOn ? togglePowerButton : nextRound}
          sx={btnSx}
        >
          {game.status === "result" ? "Next Round" : "Play"}
        </Button>
      </FlipContainer>
    </Box>
  );
}

const btnWidthSx = {
  xs: "160px",
  sm: "160px",
  md: "160px",
  lg: "160px",
  xl: "160px",
};

const btnSx = {
  ...flexBoxSx,
  zIndex: 20,
};
