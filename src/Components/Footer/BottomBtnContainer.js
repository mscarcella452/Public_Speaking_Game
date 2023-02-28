import React, { useContext } from "react";
import { Paper, Box, Button } from "@mui/material";
import { footerSx } from "../../Styles/SXstyles";
import { BtnFlipContainerOverlay } from "../Helpers/FlipContainer";
import { BottomBtnFabric, BottomResultFabric } from "../Helpers/BtnFabric";
import {
  gameContext,
  gameDispatchContext,
} from "../../Context/GameStatusContext";
import { timerDispatchContext } from "../../Context/TimerContext";
import { generateTopicContext } from "../../Context/TopicContext";
import {
  buttonContext,
  buttonDispatchContext,
} from "../../Context/ButtonContext";

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
    btn.thirdBtnTitle === "Play" &&
      setTimeout(() => {
        btnDispatch({
          type: "THIRD_BTN_TITLE",
          payload: "Next",
        });
      }, 500);
  };

  return (
    <Box sx={footerSx}>
      <BtnFlipContainerOverlay
        active={game.flip && game.status === "topic" && !game.rules}
        // active={game.flip && (game.status === "topic" || game.rules)}
      >
        <BottomBtnFabric onClick={startTimer}>Start</BottomBtnFabric>
        {/* {game.rules ? (
          <Box sx={btnSx}>Rules # 1</Box>
        ) : (
          <Button onClick={startTimer} sx={btnSx}>
            Start Timer
          </Button>
        )} */}
      </BtnFlipContainerOverlay>
      <BtnFlipContainerOverlay
        active={game.flip && game.status === "speech" && !game.rules}
        // active={game.flip && (game.status === "speech" || game.rules)}
      >
        <BottomBtnFabric onClick={failSpeech}>Fail</BottomBtnFabric>

        {/* {game.rules ? (
          <Box sx={btnSx}>Rules # 2</Box>
        ) : (
          <Button onClick={failSpeech} sx={btnSx}>
            Fail Speech
          </Button>
        )} */}
      </BtnFlipContainerOverlay>
      <BtnFlipContainerOverlay
        active={
          (!game.rules && btn.playBtnActive) ||
          // (game.rules && game.flip) ||
          (game.status === "result" && game.flip)
        }
      >
        <BottomBtnFabric
          onClick={game.status === "off" ? handleStart : nextRound}
        >
          {btn.thirdBtnTitle}
        </BottomBtnFabric>
        {/* {game.rules ? (
          <Box sx={btnSx}>Rules # 3</Box>
        ) : (
          <Button
            onClick={game.status === "off" ? handleStart : nextRound}
            sx={btnSx}
          >
            {btn.thirdBtnTitle}
          </Button>
        )} */}
      </BtnFlipContainerOverlay>
    </Box>
  );
}
