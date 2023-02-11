import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { footerSx, btnSx, BtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerDispatchContext } from "../Context/TimerContext";
import { generateTopicContext } from "../Context/TopicContext";

export default function BottomBtnContainer({
  changeThirdBtnTitle,
  thirdBtnTitle,
  toggleQuitBtn,
  playBtnActive,
  togglePlayBtnActive,
}) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const topicGenerator = useContext(generateTopicContext);

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
    togglePlayBtnActive();
    toggleQuitBtn();
    gameDispatch({ type: "GAME_ON" });
    topicGenerator();
    setTimeout(() => {
      changeThirdBtnTitle("NextRound");
    }, 100);
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
          (!game.rules && playBtnActive) ||
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
            {thirdBtnTitle}
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
