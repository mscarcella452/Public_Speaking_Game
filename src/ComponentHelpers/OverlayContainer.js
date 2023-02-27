import React, { useContext } from "react";
import { Box } from "@mui/material";
import {
  Sx,
  flexBoxSx,
  mainFlipContainerSx,
  mainBoxSx,
} from "../Styles/SXstyles";
import { MainFlipContainerOverlay } from "./FlipContainer";
import TopBtnContainer from "./TopBtnContainer";
import BottomBtnContainer from "./BottomBtnContainer";
import GameCard from "../BackFlip/GameCard";
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
        <MainFlipContainerOverlay active={game.flip}>
          {/* {!game.rules &&
            (game.status === "topic" || game.status === "speech") && (
              <SpeechTopicCard />
            )}
          {!game.rules && game.status === "result" && <RoundOverCard />} */}
          {!game.rules && <GameCard />}
          {game.rules && <RulesCard />}
        </MainFlipContainerOverlay>
      </Box>
      <BottomBtnContainer />
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
