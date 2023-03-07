import { useContext, useState, memo } from "react";
import { useGenerateText } from "../Helpers/CustomHooks";
import { Box } from "@mui/material";
import {
  Sx,
  flexBoxSx,
  mainBoxSx,
  absolutePositionSx,
} from "../Styles/SXstyles";
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

function OverlayContainer({ active }) {
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

  // gameCard props
  const currentTidbit = failSpeech ? failTidbit : successTidbit;
  const mainContent = game.status !== "result" ? currentTopic : currentTidbit;
  const resultLabel = failSpeech ? "FAIL" : "100%";
  const gameCardBackgroundColor =
    game.status === "result" && (failSpeech ? Sx.color.fail : Sx.color.success);

  return (
    <Box sx={overlayContainerSx}>
      <TopBtnContainer active={active} showTopic={showTopic} />
      <Box sx={mainBoxSx}>
        <MainFlipContainerOverlay active={active.main.container}>
          {/* GAMECARD */}
          {active.main.gameCard && (
            <GameCard
              timer={
                <Timer
                  active={game.status === "speech"}
                  expire={triggerCompleteSpeech}
                />
              }
              mainContent={mainContent}
              label={game.status !== "result" ? "TOPIC:" : resultLabel}
              backgroundColor={gameCardBackgroundColor}
            />
          )}
          {/* INTERMISSIONCARD */}
          {active.main.intermissionCard && (
            <IntermissionCard
              timer={
                <Timer
                  active={game.status === "intermission"}
                  expire={IntermissionTimerExpire}
                />
              }
            />
          )}
          {/* RULESCARD */}
          {active.main.rulesCard && <RulesCard />}
        </MainFlipContainerOverlay>
      </Box>
      <BottomBtnContainer
        active={active}
        showTopic={showTopic}
        triggerFailedSpeech={triggerFailedSpeech}
      />
    </Box>
  );
}

export default memo(OverlayContainer);

const overlayContainerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: Sx.justifyContent,
  zIndex: 20,
  ...absolutePositionSx,
  padding: Sx.padding.main,
  ...Sx.gap.main,
};
