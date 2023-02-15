import React, { useContext } from "react";
import { Box, Button } from "@mui/material";
import { footerSx, flexBoxSx, BtnFlipContainerSx } from "../Styles/SXstyles";
import { BtnFlipContainer } from "./FlipContainer";
import { gameContext } from "../Context/GameStatusContext";
import { buttonContext } from "../Context/ButtonContext";

export default function Footer() {
  const game = useContext(gameContext);
  const btn = useContext(buttonContext);

  return (
    <Box sx={footerSx}>
      <BtnFlipContainer
        active={game.flip && (game.status === "topic" || game.rules)}
      />
      <BtnFlipContainer
        active={game.flip && (game.status === "speech" || game.rules)}
      />
      <BtnFlipContainer
        active={
          (!game.rules && btn.playBtnActive) ||
          (game.rules && game.flip) ||
          (game.status === "result" && game.flip)
        }
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
