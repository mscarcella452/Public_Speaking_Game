import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { btnSx, HeaderSx, smallBtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

export default function TopBtnContainer({ togglePowerButton }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={game.gameOn && game.status !== "rules"}
        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button onClick={togglePowerButton} sx={btnSx}>
          <CancelPresentationIcon />
        </Button>
      </FlipContainer>
      <FlipContainer
        active={true}
        containerSx={smallBtnFlipContainerSx}
        overlay={true}
      >
        <Button
          // onClick={!game.gameOn ? togglePowerButton : nextRound}
          sx={btnSx}
        >
          <HelpCenterIcon />
        </Button>
      </FlipContainer>
    </Box>
  );
}

const HeaderSx2 = {
  height: {
    xs: "50px",
    sm: "50px",
    md: "50px",
    lg: "50px",
    xl: "50px",
  },
};

const smallBtnWidthSx = {
  xs: "55px",
  sm: "55px",
  md: "55px",
  lg: "55px",
  xl: "55px",
};
