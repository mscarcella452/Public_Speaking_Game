import React, { useContext } from "react";
import { Box } from "@mui/material";
import { flexBoxSx, mainFlipContainerSx, mainBoxSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import TopBtnContainer from "./TopBtnContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import SpeechTopicCard from "../BackFlip/SpeechTopicCard";
import RulesCard from "../BackFlip/RulesCard";
import RoundOverCard from "../BackFlip/RoundOverCard";
import { gameContext } from "../Context/GameStatusContext";

function OverlayContainer() {
  const game = useContext(gameContext);

  // const changeThirdBtnTitle = title => {
  //   setTimeout(() => {
  //     setThirdBtn(title);
  //   }, 500);
  // };

  return (
    <Box sx={overlayContainerSx}>
      <TopBtnContainer />
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
      <BottomBtnContainer />
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
