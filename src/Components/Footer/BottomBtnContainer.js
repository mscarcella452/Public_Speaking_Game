import React, { useContext } from "react";
import { intermisisonTrigger } from "../../Context/StorageContext";
import { Paper, Box, Button } from "@mui/material";
import { footerSx } from "../../Styles/SXstyles";
import { BtnFlipContainerOverlay } from "../Helpers/FlipContainer";
import { BottomBtnFabric, BottomResultFabric } from "../Helpers/BtnFabric";
import {
  gameContext,
  gameDispatchContext,
} from "../../Context/GameStatusContext";
import { timerDispatchContext } from "../../Context/TimerContext";
import {
  buttonContext,
  buttonDispatchContext,
} from "../../Context/ButtonContext";
import {
  storageContext,
  storageDispatchContext,
} from "../../Context/StorageContext";

export default function BottomBtnContainer({ showTopic, triggerFailedSpeech }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const storage = useContext(storageContext);
  const storageDispatch = useContext(storageDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const btn = useContext(buttonContext);
  const btnDispatch = useContext(buttonDispatchContext);

  const startSpeech = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    gameDispatch({ type: "SPEECH_STATUS" });
  };

  const triggerInterMission = () => {
    const intermissionOn = () => {
      gameDispatch({ type: "INTERMISSION_STATUS" });
      timerDispatch({ type: "TOGGLE_TIMER" });
    };
    storageDispatch({ type: "TOPIC_COUNT_RESET" });
    if (game.status === "off") {
      // intermission from homescreen
      intermissionOn();
      btnDispatch({ type: "TOGGLE_RULES_BTN" });
    } else {
      // intermission from result screen
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
      setTimeout(() => intermissionOn(), 1200);
    }
  };

  const checkIntermission = () => {
    return !storage.fullVersion && storage.topicCount >= intermisisonTrigger
      ? true
      : false;
  };

  const nextRound = () => {
    gameDispatch({ type: "LOAD" });
    checkIntermission()
      ? triggerInterMission()
      : setTimeout(() => showTopic(), 1200);
  };

  const startGame = () => {
    btnDispatch({ type: "TOGGLE_PLAY_BTN" });
    if (checkIntermission()) {
      setTimeout(() => triggerInterMission(), 1200);
    } else {
      btnDispatch({ type: "TOGGLE_QUIT_BTN" });
      showTopic();
    }
  };

  const upgradeGame = () => {
    storageDispatch({ type: "FULL_VERSION" });
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      showTopic();
      timerDispatch({ type: "RESET" });
      btnDispatch({ type: "TOGGLE_TOP_BTNS" });
    }, 1200);
  };

  const handleThirdBtn = () => {
    game.status === "off"
      ? startGame()
      : game.status !== "intermission"
      ? nextRound()
      : upgradeGame();
  };
  return (
    <Box sx={footerSx}>
      <BtnFlipContainerOverlay
        active={game.flip && game.status === "topic" && !game.rules}
      >
        <BottomBtnFabric onClick={startSpeech}>Start</BottomBtnFabric>
      </BtnFlipContainerOverlay>
      <BtnFlipContainerOverlay
        active={game.flip && game.status === "speech" && !game.rules}
      >
        <BottomBtnFabric onClick={triggerFailedSpeech}>Fail</BottomBtnFabric>
      </BtnFlipContainerOverlay>
      <BtnFlipContainerOverlay
        active={
          (!game.rules && btn.playBtnActive) ||
          (game.status === "result" && game.flip) ||
          (game.status === "intermission" && game.flip)
        }
      >
        <BottomBtnFabric onClick={handleThirdBtn}>
          {game.thirdBtnTitle}
        </BottomBtnFabric>
      </BtnFlipContainerOverlay>
    </Box>
  );
}
