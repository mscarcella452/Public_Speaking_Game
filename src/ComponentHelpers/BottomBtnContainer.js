import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { footerSx, btnSx, BtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";
import { generateTopicContext } from "../Context/TopicContext";
import { buttonContext, buttonDispatchContext } from "../Context/ButtonContext";

export default function BottomBtnContainer() {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const topicGenerator = useContext(generateTopicContext);
  const btn = useContext(buttonContext);
  const btnDispatch = useContext(buttonDispatchContext);

  const startTimer = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    gameDispatch({ type: "SPEECH" });
  };

  const failSpeech = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "FAIL" });
      timerDispatch({ type: "TOGGLE_TIMER" });
    }, 1200);
  };

  const nextRound = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "TOPIC" });
      timerDispatch({ type: "RESET" });
      topicGenerator();
    }, 1200);
  };

  const handleStart = () => {
    btnDispatch({ type: "TOGGLE_PLAY_BTN" });
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });
    gameDispatch({ type: "GAME_ON" });
    topicGenerator();
    setTimeout(() => {
      btnDispatch({ type: "THIRD_BTN_TITLE", payload: "Next Round" });
    }, 500);
  };

  return (
    <Box sx={footerSx}>
      <FlipContainer
        active={game.flip && (game.status === "topic" || game.rules)}
        containerSx={BtnFlipContainerSx}
        overlay={true}
      >
        {game.rules ? (
          <Box sx={btnSx}>Rules # 1</Box>
        ) : (
          <Button onClick={startTimer} sx={btnSx}>
            Start Timer
          </Button>
        )}
      </FlipContainer>
      <FlipContainer
        active={game.flip && (game.status === "speech" || game.rules)}
        containerSx={BtnFlipContainerSx}
        overlay={true}
      >
        {game.rules ? (
          <Box sx={btnSx}>Rules # 2</Box>
        ) : (
          <Button onClick={failSpeech} sx={btnSx}>
            Fail Speech
          </Button>
        )}
      </FlipContainer>
      <FlipContainer
        active={
          (!game.rules && btn.playBtnActive) ||
          (game.rules && game.flip) ||
          (game.status === "result" && game.flip)
        }
        containerSx={BtnFlipContainerSx}
        overlay={true}
      >
        {game.rules ? (
          <Box sx={btnSx}>Rules # 3</Box>
        ) : (
          <Button
            onClick={game.status === "off" ? handleStart : nextRound}
            sx={btnSx}
          >
            {btn.thirdBtnTitle}
          </Button>
        )}
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
