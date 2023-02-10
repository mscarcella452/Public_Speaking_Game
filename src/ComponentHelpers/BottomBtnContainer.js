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
}) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const topicGenerator = useContext(generateTopicContext);

  const startTimer = () => {
    gameDispatch({ type: "LOAD" });
    timerDispatch({ type: "TOGGLE_TIMER" });
    gameDispatch({ type: "SPEECH" });
  };
  console.log(game.status, game.flip);
  const failSpeech = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "FAIL" });
    }, 500);

    // setTimeout(() => {
    //   gameDispatch({ type: "FAIL" });
    //   gameDispatch({ type: "LOAD" });
    // }, 1200);
    timerDispatch({ type: "TOGGLE_TIMER" });
  };

  const nextRound = () => {
    gameDispatch({ type: "LOAD" });

    setTimeout(() => {
      gameDispatch({ type: "TOPIC" });
      timerDispatch({ type: "RESET" });
      topicGenerator();
    }, 500);

    // setTimeout(() => {
    //   timerDispatch({ type: "RESET" });
    //   topicGenerator();
    //   // setTimeout(() => {
    //   //   gameDispatch({ type: "TOPIC" });
    //   //   gameDispatch({ type: "LOAD" });
    //   // }, 750);
    // }, 450);
    // timerDispatch({ type: "TOGGLE_TIMER" });
  };
  const handleStart = () => {
    gameDispatch({ type: "LOAD" });
    gameDispatch({ type: "GAME_ON" });
    changeThirdBtnTitle("NextRound");
    topicGenerator();
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
          game.flip &&
          (game.status === "off" || game.rules || game.status === "result")
          // (!game.flip && !game.rules) ||
          // (game.flip && (game.status === "result" || game.rules))
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
