import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { marginSx, flexBoxSx, smallFlipContainerSx } from "../SXstyles";
import FlipContainer from "./FlipContainer";
import { gameContext } from "../Context/GameStatusContext";

export default function Footer() {
  const game = useContext(gameContext);

  return (
    <Box sx={marginSx}>
      <FlipContainer
        active={game.gameOn && game.flip && game.status === "topic"}
        containerSx={smallFlipContainerSx}
      />
      <FlipContainer
        active={game.gameOn && game.flip && game.status === "speech"}
        containerSx={smallFlipContainerSx}
      />
      <FlipContainer
        active={!game.gameOn || (game.flip && game.status === "result")}
        containerSx={smallFlipContainerSx}
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
