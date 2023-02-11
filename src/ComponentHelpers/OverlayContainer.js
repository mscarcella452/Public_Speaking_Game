import React, { useState, useContext } from "react";
import { Box, Button } from "@mui/material";
import { flexBoxSx, mainFlipContainerSx, mainBoxSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import TopBtnContainer from "./TopBtnContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import SpeechTopicCard from "../BackFlip/SpeechTopicCard";
import RulesCard from "../BackFlip/RulesCard";
import RoundOverCard from "../BackFlip/RoundOverCard";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerContext, timerDispatchContext } from "../Context/TimerContext";
import { generateTopicContext } from "../Context/TopicContext";

function OverlayContainer({
  toggleQuitBtn,
  quitBtn,
  rulesBtnActive,
  toggleRulesBtnActive,
  playBtnActive,
  togglePlayBtnActive,
}) {
  const game = useContext(gameContext);
  const timer = useContext(timerContext);
  const [thirdBtnTitle, setThirdBtn] = useState("Play");

  const changeThirdBtnTitle = title => {
    setTimeout(() => {
      setThirdBtn(title);
    }, 500);
  };

  return (
    <Box sx={overlayContainerSx}>
      <TopBtnContainer
        changeThirdBtnTitle={changeThirdBtnTitle}
        toggleQuitBtn={toggleQuitBtn}
        quitBtn={quitBtn}
        rulesBtnActive={rulesBtnActive}
        toggleRulesBtnActive={toggleRulesBtnActive}
      />
      <Box sx={mainBoxSx}>
        <FlipContainer
          active={game.flip}
          main={true}
          overlay={true}
          containerSx={mainFlipContainerSx}
        >
          {!game.rules &&
            (game.status === "topic" || game.status === "speech") && (
              <SpeechTopicCard />
            )}
          {!game.rules && game.status === "result" && <RoundOverCard />}
          {game.rules && <RulesCard />}
        </FlipContainer>
      </Box>
      <BottomBtnContainer
        thirdBtnTitle={thirdBtnTitle}
        changeThirdBtnTitle={changeThirdBtnTitle}
        toggleQuitBtn={toggleQuitBtn}
        playBtnActive={playBtnActive}
        togglePlayBtnActive={togglePlayBtnActive}
      />
    </Box>
  );
}

export default OverlayContainer;

const overlayContainerSx = {
  ...flexBoxSx,
  flexDirection: "column",
  justifyContent: "flex-start",
  zIndex: 20,
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  padding: "1.5rem 2rem",
  gap: "3rem",
};
