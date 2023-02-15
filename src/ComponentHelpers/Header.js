import React, { useContext } from "react";
import { Box } from "@mui/material";
import { HeaderSx, smallBtnFlipContainerSx } from "../Styles/SXstyles";
import { SmallBtnFlipContainer } from "./FlipContainer";
import { gameContext } from "../Context/GameStatusContext";
import { buttonContext } from "../Context/ButtonContext";

export default function Header() {
  const game = useContext(gameContext);
  const btn = useContext(buttonContext);

  return (
    <Box sx={HeaderSx}>
      <SmallBtnFlipContainer active={!game.rules && btn.quitBtnActive} />

      <SmallBtnFlipContainer active={btn.rulesBtnActive} />
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
