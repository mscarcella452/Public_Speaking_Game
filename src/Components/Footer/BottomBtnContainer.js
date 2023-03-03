import React, { useContext } from "react";
import { intermisisonCountTrigger } from "../../Context/GameStatusContext";
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

export default function BottomBtnContainer({ setFailSpeech }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const topicGenerator = useContext(generateTopicContext);
  const btn = useContext(buttonContext);
  const btnDispatch = useContext(buttonDispatchContext);

  const startTimer = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    gameDispatch({ type: "SPEECH_STATUS" });
  };

  const failSpeech = () => {
    gameDispatch({ type: "LOAD" });
    timerDispatch({ type: "TOGGLE_TIMER" });
    setFailSpeech(true);
    setTimeout(() => {
      gameDispatch({ type: "RESULT_STATUS" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  const triggerInterMission = () => {
    const intermissionOn = () => {
      gameDispatch({ type: "INTERMISSION_STATUS" });
      timerDispatch({ type: "TOGGLE_TIMER" });
    };
    if (game.status === "off") {
      // intermission from homescreen
      intermissionOn();
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
    } else {
      // intermission from result screen
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
      setTimeout(() => {
        intermissionOn();
      }, 1200);
    }
  };

  const nextRound = () => {
    gameDispatch({ type: "LOAD" });
    game.questionCount >= intermisisonCountTrigger
      ? triggerInterMission()
      : setTimeout(() => {
          gameDispatch({ type: "TOPIC_STATUS" });
          topicGenerator();
        }, 1200);
  };

  const startGame = () => {
    btnDispatch({ type: "TOGGLE_PLAY_BTN" });
    if (game.questionCount >= intermisisonCountTrigger) {
      setTimeout(() => triggerInterMission(), 1200);
    } else {
      // btnDispatch({ type: "TOGGLE_PLAY_BTN" });
      btnDispatch({ type: "TOGGLE_QUIT_BTN" });
      gameDispatch({ type: "TOPIC_STATUS" });
      topicGenerator();
    }
  };

  const upgradeGame = () => {
    gameDispatch({ type: "BUY" });
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "TOPIC_STATUS" });
      timerDispatch({ type: "RESET" });
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
    }, 1200);
  };
  console.log(game.thirdBtnTitle);

  const handleThirdBtn = () => {
    if (game.status === "off") {
      startGame();
    } else game.status !== "intermission" ? nextRound() : upgradeGame();
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
          (game.status === "result" && game.flip) ||
          (game.status === "intermission" && game.flip)
        }
      >
        <BottomBtnFabric onClick={handleThirdBtn}>
          {game.thirdBtnTitle}
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
