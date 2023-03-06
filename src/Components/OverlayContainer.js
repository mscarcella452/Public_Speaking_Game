import { useContext, useState } from "react";
import { useGenerateText } from "../Helpers/CustomHooks";
import { Box } from "@mui/material";
import { Sx, flexBoxSx, mainBoxSx } from "../Styles/SXstyles";
import { MainFlipContainerOverlay } from "./Helpers/FlipContainer";
import TopBtnContainer from "./Header/TopBtnContainer";
import BottomBtnContainer from "./Footer/BottomBtnContainer";
import Timer from "./Helpers/Timer";
import GameCard from "./MainCard/GameCard";
import RulesCard from "./MainCard/RulesCard";
import IntermissionCard from "./MainCard/IntermissionCard";
import { timerDispatchContext } from "../Context/TimerContext";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { buttonDispatchContext } from "../Context/ButtonContext";
import { speechTopics } from "../GeneratedText/SpeechTopics";
import { successTidbits, failTidbits } from "../GeneratedText/ResultTidbits";
import {
  storageContext,
  storageDispatchContext,
} from "../Context/StorageContext";

function OverlayContainer() {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const btnDispatch = useContext(buttonDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const storage = useContext(storageContext);
  const storageDispatch = useContext(storageDispatchContext);
  const [failSpeech, setFailSpeech] = useState(true);
  const [currentTopic, topicGenerator, usedTopicIndex] = useGenerateText(
    storage.topicIndex,
    speechTopics
  );
  const [failTidbit, generateFailTidbit, usedFailIndex] = useGenerateText(
    storage.failIndex,
    failTidbits
  );
  const [successTidbit, generateSuccessTidbit, usedSuccessIndex] =
    useGenerateText(storage.successIndex, successTidbits);

  const showTopic = () => {
    gameDispatch({ type: "TOPIC_STATUS" });
    topicGenerator();
    storageDispatch({ type: "TURN_COUNT", payload: usedTopicIndex });
  };

  const showResults = () => {
    gameDispatch({ type: "LOAD" });
    setTimeout(() => {
      gameDispatch({ type: "RESULT_STATUS" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  const triggerCompleteSpeech = () => {
    setFailSpeech(false);
    generateSuccessTidbit();
    storageDispatch({
      type: "UPDATE_SUCCESS_INDEX",
      payload: usedSuccessIndex,
    });
    showResults();
  };

  const triggerFailedSpeech = () => {
    timerDispatch({ type: "TOGGLE_TIMER" });
    setFailSpeech(true);
    generateFailTidbit();
    storageDispatch({ type: "UPDATE_FAIL_INDEX", payload: usedFailIndex });
    showResults();
  };

  const IntermissionTimerExpire = () =>
    btnDispatch({ type: "TOGGLE_QUIT_BTN" });

  return (
    <Box sx={overlayContainerSx}>
      <TopBtnContainer showTopic={showTopic} />
      <Box sx={mainBoxSx}>
        <MainFlipContainerOverlay active={game.flip}>
          {/* {!game.rules &&
            (game.status === "topic" || game.status === "speech") && (
              <SpeechTopicCard />
            )}
          {!game.rules && game.status === "result" && <RoundOverCard />} */}

          {!game.rules && game.status !== "intermission" && (
            <GameCard
              timer={
                <Timer
                  active={game.status === "speech"}
                  expire={triggerCompleteSpeech}
                />
              }
              currentTopic={currentTopic}
              failSpeech={failSpeech}
              currentTidbit={failSpeech ? failTidbit : successTidbit}
            />
          )}
          {!game.rules && game.status === "intermission" && (
            <IntermissionCard
              timer={
                <Timer
                  active={game.status === "intermission"}
                  expire={IntermissionTimerExpire}
                />
              }
            />
          )}
          {/* {game.intermission && <IntermissionCard />} */}
          {game.rules && <RulesCard />}
        </MainFlipContainerOverlay>
      </Box>
      <BottomBtnContainer
        showTopic={showTopic}
        triggerFailedSpeech={triggerFailedSpeech}
      />
    </Box>
  );
}

export default OverlayContainer;

const overlayContainerSx = {
  ...flexBoxSx,
  // height: "100vh",
  flexDirection: "column",
  justifyContent: Sx.justifyContent,
  // justifyContent: "space-between",
  zIndex: 20,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: Sx.padding.main,
  ...Sx.gap.main,
  // overflow: "scroll",
};
