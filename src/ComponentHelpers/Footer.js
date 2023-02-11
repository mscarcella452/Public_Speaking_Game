import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { footerSx, flexBoxSx, BtnFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext } from "../Context/GameStatusContext";

export default function Footer({ playBtnActive }) {
  const game = useContext(gameContext);

  return (
    <Box sx={footerSx}>
      <FlipContainer
        active={game.flip && (game.status === "topic" || game.rules)}
        containerSx={BtnFlipContainerSx}
      />
      <FlipContainer
        active={game.flip && (game.status === "speech" || game.rules)}
        containerSx={BtnFlipContainerSx}
      />
      <FlipContainer
        active={
          (!game.rules && playBtnActive) ||
          (game.rules && game.flip) ||
          (game.status === "result" && game.flip)
        }
        containerSx={BtnFlipContainerSx}
      />
    </Box>
  );
}

const btnWidthSx = {
  xs: "160px",
  sm: "160px",
  md: "160px",
  lg: "160px",
  xl: "160px",
};
