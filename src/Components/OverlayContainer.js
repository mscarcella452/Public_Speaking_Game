import React, { useContext, useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
  Sx,
  flexBoxSx,
  mainFlipContainerSx,
  mainBoxSx,
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

function OverlayContainer() {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const btnDispatch = useContext(buttonDispatchContext);
  const timerDispatch = useContext(timerDispatchContext);
  const [failSpeech, setFailSpeech] = useState(true);

  // useEffect(() => {
  //   !failSpeech && game.status === "speech" && toggleFailSpeech();
  // }, [game.status]);

  const completedSpeech = () => {
    gameDispatch({ type: "LOAD" });
    setFailSpeech(false);
    setTimeout(() => {
      gameDispatch({ type: "RESULT_STATUS" });
      timerDispatch({ type: "RESET" });
    }, 1200);
  };

  const IntermissionOver = () => btnDispatch({ type: "TOGGLE_QUIT_BTN" });

  return (
    <Box sx={overlayContainerSx}>
      <TopBtnContainer />
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
                  expire={completedSpeech}
                />
              }
              failSpeech={failSpeech}
            />
          )}
          {!game.rules && game.status === "intermission" && (
            <IntermissionCard
              timer={
                <Timer
                  active={game.status === "intermission"}
                  expire={IntermissionOver}
                />
              }
            />
          )}
          {/* {game.intermission && <IntermissionCard />} */}
          {game.rules && <RulesCard />}
        </MainFlipContainerOverlay>
      </Box>
      <BottomBtnContainer setFailSpeech={setFailSpeech} />
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
