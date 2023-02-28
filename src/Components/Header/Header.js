import React, { useContext } from "react";
import { Box } from "@mui/material";
import { HeaderSx, smallBtnFlipContainerSx } from "../../Styles/SXstyles";
import { SmallBtnFlipContainer } from "../Helpers/FlipContainer";
import { gameContext } from "../../Context/GameStatusContext";
import { buttonContext } from "../../Context/ButtonContext";

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
