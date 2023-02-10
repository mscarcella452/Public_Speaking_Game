import React, { useContext, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { flexBoxSx, HeaderSx, smallBtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext, gameDispatchContext } from "../Context/GameStatusContext";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { useToggle } from "../Helpers/CustomHooks";

export default function Header({ toggleFlip }) {
  const game = useContext(gameContext);
  const gameDispatch = useContext(gameDispatchContext);
  const [rulesBtnActive, toggleRulesBtnActive] = useToggle(false);

  useEffect(() => {
    rulesBtnActive && toggleRulesBtnActive();
    setTimeout(() => {
      toggleRulesBtnActive();
    }, 1000);
  }, [game.rules]);

  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={!game.rules && game.status !== "off"}
        containerSx={smallBtnFlipContainerSx}
      />

      <FlipContainer
        active={rulesBtnActive}
        containerSx={smallBtnFlipContainerSx}
      />
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
