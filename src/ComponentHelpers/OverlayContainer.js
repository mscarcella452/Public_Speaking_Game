import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { flexBoxSx, mainFlipContainerSx, mainBoxSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import TopBtnContainer from "./TopBtnContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import SpeechTopicCard from "../BackFlip/SpeechTopicCard";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import { timerContext, timerDispatchContext } from "../Context/TimerContext";
import { generateTopicContext } from "../Context/TopicContext";

function OverlayContainer() {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const timer = useContext(timerContext);
  const timerDispatch = useContext(timerDispatchContext);
  const topicGenerator = useContext(generateTopicContext);

  const togglePowerButton = () => {
    // game.gameOn && topicGenerator();
    timer.seconds !== timer.startingValue &&
      setTimeout(() => {
        timerDispatch({ type: "RESET" });
        game.status !== "topic" && gameDispatch({ type: "TOPIC" });
      }, 450);
    gameDispatch({ type: "TOGGLE_POWER" });
  };

  return (
    <Box sx={overlayContainerSx}>
      {/* <Button
        onClick={togglePowerButton}
        sx={{ zIndex: 20, position: "absolute", top: 0 }}
      >
        Turn Off
      </Button> */}
      <TopBtnContainer togglePowerButton={togglePowerButton} />
      <Box sx={mainBoxSx}>
        <FlipContainer
          active={game.gameOn && game.flip}
          main={true}
          overlay={true}
          containerSx={mainFlipContainerSx}
        >
          <SpeechTopicCard />
        </FlipContainer>
      </Box>
      <BottomBtnContainer
        togglePowerButton={togglePowerButton}
        timerDispatch={timerDispatch}
        topicGenerator={topicGenerator}
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
