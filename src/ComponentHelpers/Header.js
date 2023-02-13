import React, { useContext } from "react";
import { Box } from "@mui/material";
import { HeaderSx, smallBtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext } from "../Context/GameStatusContext";
import { buttonContext } from "../Context/ButtonContext";

export default function Header() {
  const game = useContext(gameContext);
  const btn = useContext(buttonContext);

  return (
    <Box sx={HeaderSx}>
      <FlipContainer
        active={!game.rules && btn.quitBtnActive}
        containerSx={smallBtnFlipContainerSx}
      />

      <FlipContainer
        active={btn.rulesBtnActive}
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
